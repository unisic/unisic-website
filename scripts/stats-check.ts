// node scripts/stats-check.ts - the unisic.stats parser and the year review, no browser needed.
import assert from 'node:assert/strict';
import { merge, parseStats, review, signature, weeks, years, sample } from '../src/lib/stats.ts';

const now = new Date(2026, 9, 28);
// Signed the way the app signs, unless `extra` overrides a field after the fact.
const file = async (screenshots: unknown, extra: Record<string, unknown> = {}) => {
	const id = typeof extra.id === 'string' ? extra.id : 'test';
	const sig = await signature(id, (screenshots ?? {}) as Record<string, unknown>);
	return JSON.stringify({ format: 'unisic.stats', version: 1, id, screenshots, sig, ...extra });
};

// The same vector is in the app's tests/CaptureStatsTest.cpp.
assert.equal(
	await signature('test', { '2026-01-02': 5, '2026-01-01': 2 }),
	'42be1ff52b41208061df97a7331544d319df964347c8095588aef701bb2ba3c3'
);

const { days } = await parseStats(
	await file({ '2025-12-30': 4, '2025-12-31': 1, '2026-01-01': 2, '2026-01-02': 5, '2026-01-03': 1, '2026-01-10': 9, '2026-02-01': 0 }),
	now
);
assert.equal(days.size, 6, 'zero days are dropped');
assert.deepEqual(years(days), [2026, 2025]);

const r = review(days, 2026);
assert.equal(r.total, 17);
assert.equal(r.activeDays, 4);
assert.deepEqual(r.busiest, { key: '2026-01-10', count: 9 });
assert.deepEqual(r.streak, { length: 3, from: '2026-01-01', to: '2026-01-03' });
assert.deepEqual(r.bestMonth, { month: 0, count: 17 });
assert.deepEqual(r.weekday, { day: 5, count: 10 }, '3 Jan and 10 Jan 2026 are Saturdays');
assert.equal(r.previous, 5);

// 2026 starts on a Thursday: three empty cells above 1 January, 53 columns, every day once.
const w = weeks(days, 2026);
assert.equal(w[0].slice(0, 3).every((c) => c === null), true);
assert.equal(w[0][3]?.key, '2026-01-01');
assert.equal(w.flat().filter(Boolean).length, 365);
assert.equal(w.find((col) => col.some((c) => c?.key === '2026-01-10'))?.find((c) => c?.key === '2026-01-10')?.level, 4);

const good = await file({ '2026-01-01': 2 }, { id: 'a' });
for (const bad of await Promise.all([
	'not json',
	'[]',
	JSON.stringify({ format: 'other', version: 1, screenshots: {} }),
	file({}, { version: 2 }),
	file({ '2026-02-30': 1 }),
	'{"format":"unisic.stats","version":1,"screenshots":{"__proto__":1}}',
	file({ '2026-01-01': -1 }),
	file({ '2026-01-01': 1.5 }),
	file({ '2026-01-01': '3' }),
	file([1, 2]),
	file({ '2026-10-30': 1 }),
	file({ '2026-01-01': 10_001 }),
	good.replace('"2026-01-01":2', '"2026-01-01":40'),
	good.replace('}', ',"2026-01-02":3}'),
	good.replace('"id":"a"', '"id":"b"'),
	file({ '2026-01-01': 2 }, { sig: undefined })
])) {
	await assert.rejects(parseStats(bad, now), Error, bad);
}
assert.equal((await parseStats(good, now)).days.size, 1);
assert.equal((await parseStats(await file({ '2026-10-29': 10_000 }), now)).days.size, 1, 'a computer one time zone ahead, a heavy day');
assert.equal((await parseStats(await file(undefined), now)).days.size, 0, 'no screenshots yet is an empty file, not an error');

// Merging: one id is one counter (the higher count per day wins), separate ids add up.
const laptop = await parseStats(await file({ '2026-01-01': 3, '2026-01-02': 4 }, { id: 'laptop' }), now);
const backup = await parseStats(await file({ '2026-01-01': 2 }, { id: 'laptop' }), now);
const desktop = await parseStats(await file({ '2026-01-02': 1, '2026-01-05': 6 }, { id: 'desktop' }), now);
assert.deepEqual([...merge([laptop, backup, laptop])].sort(), [['2026-01-01', 3], ['2026-01-02', 4]], 'copies never add up');
assert.deepEqual([...merge([backup, laptop, desktop])].sort(), [['2026-01-01', 3], ['2026-01-02', 5], ['2026-01-05', 6]]);

const s = sample(new Date(2026, 9, 28));
assert.ok(s.size > 200 && s.size < 520);
assert.deepEqual([...sample(new Date(2026, 9, 28))], [...s], 'the sample is the same on every load');

console.log('stats-check: PASS');

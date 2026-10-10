import { Fragment, type ReactNode } from "react";

/* Split a "{token}" template into text runs and slot nodes, so a translated
   string can carry inline markup (a <Kbd>, <code> or <a>) in whatever order
   the language needs. Unknown tokens are left as literal text. */
export function template(
  str: string,
  slots: Record<string, ReactNode>,
): ReactNode[] {
  return str.split(/(\{\w+\})/).map((part, i) => {
    const m = /^\{(\w+)\}$/.exec(part);
    if (m && m[1] in slots) return <Fragment key={i}>{slots[m[1]]}</Fragment>;
    return <Fragment key={i}>{part}</Fragment>;
  });
}

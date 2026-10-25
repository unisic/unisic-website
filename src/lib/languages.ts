/* The interface languages Unisic ships. `native` is the endonym shown in
   the UI language picker; `english` labels it for screen readers; `code`
   is the BCP-47 tag. */

export type Language = {
  native: string;
  english: string;
  code: string;
};

export const LANGUAGES: Language[] = [
  { native: "English", english: "English", code: "en" },
  { native: "Deutsch", english: "German", code: "de" },
  { native: "Español", english: "Spanish", code: "es" },
  { native: "Français", english: "French", code: "fr" },
  { native: "Italiano", english: "Italian", code: "it" },
  { native: "Nederlands", english: "Dutch", code: "nl" },
  { native: "Polski", english: "Polish", code: "pl" },
  { native: "繁體中文", english: "Traditional Chinese", code: "zh-Hant" },
  { native: "简体中文", english: "Simplified Chinese", code: "zh-Hans" },
];

/* The app's palettes. The ids are the data-theme values tokens.css defines;
   the swatch is bg, surface and accent from Theme.qml and resources/themes. */

export type ThemeChoice = { id: string; label: string; swatch: [string, string, string] };

export const THEMES: ThemeChoice[] = [
  { id: "unisic", label: "Unisic", swatch: ["#100E2C", "#1E1B4A", "#C8ACD6"] },
  { id: "dark", label: "Dark", swatch: ["#121216", "#1D1D22", "#C8ACD6"] },
  { id: "light", label: "Light", swatch: ["#F4F5F7", "#FFFFFF", "#4C6EF5"] },
  { id: "catppuccin-mocha", label: "Catppuccin Mocha", swatch: ["#1E1E2E", "#313244", "#CBA6F7"] },
  { id: "catppuccin-latte", label: "Catppuccin Latte", swatch: ["#EFF1F5", "#FFFFFF", "#8839EF"] },
  { id: "dracula", label: "Dracula", swatch: ["#282A36", "#343746", "#BD93F9"] },
  { id: "nord", label: "Nord", swatch: ["#2E3440", "#3B4252", "#88C0D0"] },
  { id: "gruvbox", label: "Gruvbox", swatch: ["#282828", "#3C3836", "#FABD2F"] },
];

export const THEME_KEY = "unisic-theme";

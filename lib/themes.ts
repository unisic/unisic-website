/* The app's 8 named palettes, values from unisic/qml/Theme.qml:17-62. */

export type ThemePalette = {
  name: string;
  label: string;
  isDark: boolean;
  primary: string;
  tertiary: string;
  accent: string;
  bg: string;
  surface: string;
  text: string;
  textOnAccent: string;
};

/* Stroke swatches — a fixed annotation palette (Theme.qml:102), independent
   of the app theme. Values map to the --swatch-N tokens in tokens.css. */
export const SWATCHES = [1, 2, 3, 4, 5, 6, 7].map((n) => `var(--swatch-${n})`);

/* Human color names for accessible swatch labels (order matches SWATCHES). */
export const SWATCH_NAMES = ["Red", "Yellow", "Green", "Blue", "Lilac", "White", "Navy"];

export const THEMES: ThemePalette[] = [
  { name: "unisic", label: "Unisic", isDark: true, primary: "#17153B", tertiary: "#433D8B", accent: "#C8ACD6", bg: "#100E2C", surface: "#1E1B4A", text: "#F3F0FA", textOnAccent: "#1B1834" },
  { name: "dark", label: "Dark", isDark: true, primary: "#17171C", tertiary: "#2E2E36", accent: "#7C9CF5", bg: "#121216", surface: "#1D1D22", text: "#ECECEF", textOnAccent: "#0C1220" },
  { name: "light", label: "Light", isDark: false, primary: "#FFFFFF", tertiary: "#E1E1E8", accent: "#4C6EF5", bg: "#F4F5F7", surface: "#FFFFFF", text: "#1B1B1F", textOnAccent: "#FFFFFF" },
  { name: "catppuccin-mocha", label: "Catppuccin Mocha", isDark: true, primary: "#1E1E2E", tertiary: "#45475A", accent: "#CBA6F7", bg: "#1E1E2E", surface: "#313244", text: "#CDD6F4", textOnAccent: "#1E1E2E" },
  { name: "catppuccin-latte", label: "Catppuccin Latte", isDark: false, primary: "#EFF1F5", tertiary: "#CCD0DA", accent: "#8839EF", bg: "#EFF1F5", surface: "#FFFFFF", text: "#4C4F69", textOnAccent: "#FFFFFF" },
  { name: "dracula", label: "Dracula", isDark: true, primary: "#282A36", tertiary: "#44475A", accent: "#BD93F9", bg: "#282A36", surface: "#343746", text: "#F8F8F2", textOnAccent: "#282A36" },
  { name: "nord", label: "Nord", isDark: true, primary: "#2E3440", tertiary: "#434C5E", accent: "#88C0D0", bg: "#2E3440", surface: "#3B4252", text: "#ECEFF4", textOnAccent: "#2E3440" },
  { name: "gruvbox", label: "Gruvbox", isDark: true, primary: "#282828", tertiary: "#504945", accent: "#FABD2F", bg: "#282828", surface: "#3C3836", text: "#EBDBB2", textOnAccent: "#282828" },
];

import {
  blur,
  colorPicker,
  drawEraser,
  drawFreehand,
  drawHighlight,
  drawText,
  handPointing,
  magnify,
  number,
  pixelate,
  shapes,
  transformCrop,
} from "#lib/icons.ts";

/* The tool row of ToolCatalog.qml, in its order and with its shortcuts; the
   overlay shows all of them but crop, the editor adds crop. Keys match
   dict.app.tools. */
export const TOOLS = [
  { id: "edit", icon: handPointing, key: "V" },
  { id: "pen", icon: drawFreehand, key: "P" },
  { id: "shapes", icon: shapes, key: "" },
  { id: "text", icon: drawText, key: "T" },
  { id: "highlight", icon: drawHighlight, key: "H" },
  { id: "blur", icon: blur, key: "B" },
  { id: "pixelate", icon: pixelate, key: "X" },
  { id: "eraser", icon: drawEraser, key: "E" },
  { id: "magnify", icon: magnify, key: "Z" },
  { id: "eyedropper", icon: colorPicker, key: "I" },
  { id: "step", icon: number, key: "N" },
  { id: "crop", icon: transformCrop, key: "C" },
] as const;

export type ToolId = (typeof TOOLS)[number]["id"];

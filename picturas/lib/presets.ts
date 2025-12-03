export const PRESETS = {
  boost: [
    { type: "brightness", value: 20 },
    { type: "contrast", value: 15 },
  ],
  bw: [
    { type: "saturation", value: -100 },
    { type: "contrast", value: 10 }
  ],
  vintage: [
    { type: "brightness", value: -10 },
    { type: "contrast", value: -5 },
    { type: "saturation", value: -20 }
  ],
  detail: [
    { type: "sharpen", value: 25 }
  ]
} as const;

// 🔥 Tipo seguro (resolve todos os erros TS)
export type PresetName = keyof typeof PRESETS; 

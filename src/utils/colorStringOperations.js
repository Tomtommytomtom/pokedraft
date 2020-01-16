export const convertRgbToRgbAlpha = (rgb, alpha) => {
  return `${rgb.slice(0, -1)},${alpha})`
}

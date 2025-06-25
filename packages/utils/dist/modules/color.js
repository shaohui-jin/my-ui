/**
 * @description: 把rgba颜色(或rgb颜色)转成十六进制颜色
 * @params {string} color - rgba或rgb颜色字符串
 * @return {string} - 十六进制颜色字符串
 */
export const rgbaToHex = (color) => {
    let val = color
        .replace(/rgba?\(/, '')
        .replace(/\)/, '')
        .replace(/[\s+]/g, '')
        .split(',');
    let a = parseFloat(val[3] || '1'), r = Math.floor(a * parseInt(val[0]) + (1 - a) * 255), g = Math.floor(a * parseInt(val[1]) + (1 - a) * 255), b = Math.floor(a * parseInt(val[2]) + (1 - a) * 255);
    return "#" +
        ("0" + r.toString(16)).slice(-2) +
        ("0" + g.toString(16)).slice(-2) +
        ("0" + b.toString(16)).slice(-2);
};
/**
 * @description: 把十六进制颜色转成rgba颜色(或rgb颜色)
 * @params {string} hex - 十六进制颜色字符串，格式为#RRGGBB或#RGB
 * @params {number} alpha - 可选，透明度值，范围0-1
 * @return {string} - rgba或rgb颜色字符串
 */
export const hexToRGBA = (hex, alpha) => {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    }
    else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
};

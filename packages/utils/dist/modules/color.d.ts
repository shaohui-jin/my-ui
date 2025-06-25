/**
 * @description: 把rgba颜色(或rgb颜色)转成十六进制颜色
 * @params {string} color - rgba或rgb颜色字符串
 * @return {string} - 十六进制颜色字符串
 */
export declare const rgbaToHex: (color: string) => string;
/**
 * @description: 把十六进制颜色转成rgba颜色(或rgb颜色)
 * @params {string} hex - 十六进制颜色字符串，格式为#RRGGBB或#RGB
 * @params {number} alpha - 可选，透明度值，范围0-1
 * @return {string} - rgba或rgb颜色字符串
 */
export declare const hexToRGBA: (hex: string, alpha: number) => string;

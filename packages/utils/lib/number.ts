/**
 * @description : 获取指定范围内的随机整数
 * @param min { number } - 最小值
 * @param max { number } - 最大值
 * @return { number } - 返回一个介于min和max之间的随机整数
 * @example
 * getRandom(1, 10) // 返回1到10之间的随机整数
 */
export const getRandom = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max + 1 - min) + min)
}

/**
 * @desc 格式化小数
 * @param value 待格式化数据
 * @param scale 格式化位数
 */
export const scaleFormat = (value: string = '0', scale: number = 2) => {
  return Number.parseFloat(value).toFixed(scale)
}

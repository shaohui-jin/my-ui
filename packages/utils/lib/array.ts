
/**
 * desc: 集合扁平化
 * @param arr 原数组
 * @param prefix 标识
 * @return 扁平化后的数组
 * @example
 * flatten([
 *   { "a": 1, "children": [{ "b": 11, "children": [] }, { "b": 12 }, { "b": 13 }] },
 *   { "a": 2, "children": [] }
 * ])
 * 结果：
 * [
 *   { "a": 1, "children": [{ "b": 11, "children": [] }, { "b": 12 }, { "b": 13 }] },
 *   { "b": 11, "children": [] },
 *   { "b": 12 },
 *   { "b": 13 },
 *   { "a": 2, "children": [] }
 * ]
 */
export const flatten = (arr: any[], prefix = 'children'): any[] => {
  return arr.reduce((result, item): any[] => {
    result = result.concat(item)
    const checkData = prefix ? item[prefix] : item
    if (Array.isArray(checkData)) {
      return result.concat(flatten(checkData, prefix))
    }
    return result
  }, [])
}

/**
 * desc: 判断是否相同
 * @param arr1 要比较的数组一
 * @param arr2 要比较的数组二
 * @example
 * isEqual([1,'2',3,'4'], [1,'2',3,'4']) // true
 * isEqual([1,'2',3,'4'], [1,'2','3','4']) // false
 */
export function isEqual(arr1: Array<string | number>, arr2: Array<string | number>): boolean {
  let count = 0
  const length = arr2.length
  for (const i in arr2) {
    for (const j in arr1) {
      if (arr2[i] === arr1[j]) count++
    }
  }
  return count === length
}


type ObjectType = Record<string, any>

/**
 * desc: 对象扁平化
 * @param obj 需要扁平化的对象
 * @param prefix 转义后的前缀
 * @example
 * flattenObj({ a: { b: 1 }, c: 2 }) // { "a.b": 1, "c": 2 }
 * flattenObj({ a: { b: 1 }, c: 2 }, 'a') // { a.a.b: 1, a.c: 2 }
 */
export const flattenObj = (obj: ObjectType, prefix: string  = ''): ObjectType => {
  return Object.keys(obj).reduce(
    (acc, k) => {
      const pre = prefix.length ? prefix + '.' : ''
      if (typeof obj[k] === 'object' && obj[k] !== null) {
        Object.assign(acc, flattenObj(obj[k], pre + k))
      } else {
        acc[pre + k] = obj[k]
      }
      return acc
    },
    {} as Record<string, any>
  )
}

/**
 * desc: 扁平化还原
 * @param obj 需要还原扁平化的对象
 * @example
 * unFlatten({ 'a.b': 1, 'c': 2 }) // { "a": { "b": 1 }, "c": 2 }
 */
export const unFlatten = (obj: ObjectType): ObjectType => {
  const result: any = {}
  for (const key in obj) {
    const keys = key.split('.')
    let nestedObj = result
    for (let i = 0; i < keys.length - 1; i++) {
      if (!nestedObj[keys[i]]) {
        nestedObj[keys[i]] = {}
      }
      nestedObj = nestedObj[keys[i]]
    }
    nestedObj[keys[keys.length - 1]] = obj[key]
  }
  return result
}

/**
 * desc: 判断是否相同
 * @param obj1 要比较的对象一
 * @param obj2 要比较的对象二
 * @example
 * isEqual({ a: 1 , b: { a: 2 } }, { a: 1 , b: { a: 2 } }) // true
 * isEqual({ a: 1 , b: { a: 2 } }, { a: 1 , b: { a: 1 } }) // false
 */
export function isEqual(obj1: ObjectType, obj2: ObjectType) {
  if (!obj1 || !obj2) return false
  const aProps = Object.getOwnPropertyNames(obj1)
  const bProps = Object.getOwnPropertyNames(obj2)
  if (aProps.length != bProps.length) return false
  for (let i = 0; i < aProps.length; i++) {
    const propName = aProps[i]
    const propA = obj1[propName]
    const propB = obj2[propName]
    if (!Object.prototype.hasOwnProperty.call(obj2, propName)) return false
    if (propA instanceof Object) {
      if (!isEqual(propA, propB)) return false
    } else if (propA !== propB) {
      return false
    }
  }
  return true
}

/***
 * desc: 判断是否为空
 * @param obj 需要判断的对象
 * @example
 * isObjectEmpty({}) // true
 * isObjectEmpty({ a: 1 }) // false
 */
export const isEmpty = (obj: ObjectType): boolean => {
  return Object.keys(obj).length === 0
}

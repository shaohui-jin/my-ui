/**
 * 并发请求
 * @param urls 请求集合
 * @param maxNum 并发数量
 * @return {Promise<any[]>}
 * @example const res = concurRequest(["https://jsonplaceholder.typicode.com/posts"], 3)
 */
export const concurRequest = (urls: string[], maxNum: number): Promise<any[]> => {
  return new Promise((resolve: any, reject: any) => {
    let nextIndex = 0; // 下一个请求的索引
    let finishCount = 0 // 完成的请求数量
    const result: any[] = [] // 请求放置结果

    function _request() {
      if(nextIndex >= urls.length) {
        return
      }
      const i = nextIndex
      const url = urls[nextIndex++]
      fetch(url).then(resp => {
        result[i] = resp
        finishCount++
        if (finishCount === urls.length) {
          resolve(result)
        }
        _request() // 递归调用，下一个请求补位
      })
    }
    for (let i = 0; i < Math.min(maxNum, urls.length); i++) {
      _request()
    }
  })
}

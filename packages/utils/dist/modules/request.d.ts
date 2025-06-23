/**
 * 并发请求
 * @param urls 请求集合
 * @param maxNum 并发数量
 * @return {Promise<any[]>}
 * @example const res = concurRequest(["https://jsonplaceholder.typicode.com/posts"], 3)
 */
export declare const concurRequest: (urls: string[], maxNum: number) => Promise<any[]>;

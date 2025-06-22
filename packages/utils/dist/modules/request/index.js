"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concurRequest = void 0;
/**
 * 并发请求
 * @param urls 请求集合
 * @param maxNum 并发数量
 * @return {Promise<any[]>}
 * @example const res = concurRequest(["https://jsonplaceholder.typicode.com/posts"], 3)
 */
var concurRequest = function (urls, maxNum) {
    return new Promise(function (resolve, reject) {
        var nextIndex = 0; // 下一个请求的索引
        var finishCount = 0; // 完成的请求数量
        var result = []; // 请求放置结果
        function _request() {
            if (nextIndex >= urls.length) {
                return;
            }
            var i = nextIndex;
            var url = urls[nextIndex++];
            fetch(url).then(function (resp) {
                result[i] = resp;
                finishCount++;
                if (finishCount === urls.length) {
                    resolve(result);
                }
                _request(); // 递归调用，下一个请求补位
            });
        }
        for (var i = 0; i < Math.min(maxNum, urls.length); i++) {
            _request();
        }
    });
};
exports.concurRequest = concurRequest;

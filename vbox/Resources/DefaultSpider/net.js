// TVBox 风格网络请求库封装
// 支持同步和异步请求

/**
 * 同步请求封装
 * @param {string} url - 请求地址
 * @param {Object} options - 请求选项
 * @returns {Object} 响应对象
 */
function req(url, options) {
    return http(url, Object.assign({
        async: false
    }, options));
}

/**
 * HTTP 请求核心函数
 * @param {string} url - 请求地址
 * @param {Object} options - 请求选项
 * @returns {Object|Promise} 响应对象或 Promise
 */
function http(url, options = {}) {
    // 同步模式
    if (options.async === false) {
        return _http(url, options);
    }
    
    // 异步模式
    return new Promise(function(resolve) {
        _http(url, Object.assign({
            complete: function(res) {
                resolve(res);
            }
        }, options));
    }).catch(function(err) {
        console.error(err.name, err.message, err.stack);
        return {
            ok: false,
            status: 500,
            url: url
        };
    });
}

/**
 * 原生 HTTP 请求（由 iOS 原生实现）
 * 在 JS 环境中会被 QJSSpiderEngine 的桥接替换
 */
function _http(url, options) {
    // 这个方法会在 iOS 中被 QJSBridge_registerHTTP 替换为原生实现
    console.log("_http called (not implemented in JS)");
    return {
        ok: false,
        status: 0,
        content: "Native HTTP bridge not available",
        url: url
    };
}

// 导出到全局
this.req = req;
this.http = http;

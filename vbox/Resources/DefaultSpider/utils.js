// 常用工具函数库

/**
 * JSON 解析辅助
 * @param {string} text - JSON 字符串
 * @returns {Object} 解析后的对象
 */
function jsonParse(text) {
    try {
        return JSON.parse(text);
    } catch (e) {
        console.error("JSON 解析失败：" + e.message);
        return null;
    }
}

/**
 * 字符串截取（从后往前搜索）
 * @param {string} str - 原字符串
 * @param {string} separator - 分隔符
 * @returns {string} 截取后的字符串
 */
function getSub(str, separator) {
    try {
        var index = str.lastIndexOf(separator);
        return index === -1 ? "" : str.substring(index + separator.length);
    } catch (e) {
        return "";
    }
}

/**
 * 移除指定后缀
 * @param {string} str - 原字符串
 * @param {string} suffix - 要移除的后缀
 * @returns {string} 处理后的字符串
 */
function removeFix(str, suffix) {
    if (str.endsWith(suffix)) {
        return str.slice(0, -suffix.length);
    }
    return str;
}

/**
 * 检测是否为视频格式
 * @param {string} url - URL 地址
 * @returns {boolean} 是否为视频
 */
function isVideoFormat(url) {
    var videoFormats = ['m3u8', 'mp4', 'flv', 'avi', 'mkv', 'rm', 'wmv', 'mpg', 'm4a', 'mp3', 'm3u8'];
    for (var i = 0; i < videoFormats.length; i++) {
        if (url.indexOf(videoFormats[i]) !== -1) {
            return true;
        }
    }
    return false;
}

/**
 * URL 拼接
 * @param {string} base - 基础 URL
 * @param {string} relative - 相对路径
 * @returns {string} 完整 URL
 */
function urljoin(base, relative) {
    if (!relative) return base;
    if (relative.startsWith('http')) return relative;
    if (!base.endsWith('/')) base += '/';
    return base + relative;
}

/**
 * 修复 URL（添加协议）
 * @param {string} url - 原始 URL
 * @returns {string} 修复后的 URL
 */
function fixUrl(url) {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    if (url.startsWith('//')) return 'https:' + url;
    return 'https://' + url;
}

/**
 * 字符串转义
 * @param {string} str - 原始字符串
 * @returns {string} 转义后的字符串
 */
function escapeString(str) {
    return str.replace(/'/g, "\\'")
              .replace(/"/g, '\\"')
              .replace(/\n/g, '\\n')
              .replace(/\r/g, '\\r');
}

/**
 * 格式化日期时间
 * @param {Date} date - 日期对象
 * @returns {string} 格式化后的字符串
 */
function formatDateTime(date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    var h = date.getHours();
    var min = date.getMinutes();
    return y + '-' + (m < 10 ? '0' : '') + m + '-' + (d < 10 ? '0' : '') + d + ' ' + 
           (h < 10 ? '0' : '') + h + ':' + (min < 10 ? '0' : '') + min;
}

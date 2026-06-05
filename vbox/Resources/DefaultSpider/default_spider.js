// 默认测试蜘蛛 - 用于演示和调试
// 符合 TVBox 标准蜘蛛 API 规范

var spider = {};

/**
 * 初始化
 * @param {Object} config - 配置对象
 */
spider.init = function(config) {
    console.log("蜘蛛初始化：" + JSON.stringify(config));
    return true;
};

/**
 * 首页内容
 * @returns {string} JSON 字符串，包含分类和推荐列表
 */
spider.homeContent = function() {
    return JSON.stringify({
        "class": [
            {"type_id": "1", "type_name": "电影"},
            {"type_id": "2", "type_name": "电视剧"},
            {"type_id": "3", "type_name": "综艺"},
            {"type_id": "4", "type_name": "动漫"}
        ],
        "list": [
            {
                "vod_id": "test_001",
                "vod_name": "测试电影 1",
                "vod_pic": "https://example.com/poster1.jpg",
                "vod_remarks": "更新至 2026",
                "vod_year": "2026",
                "vod_area": "中国",
                "vod_content": "这是一部测试电影"
            },
            {
                "vod_id": "test_002",
                "vod_name": "测试电视剧 1",
                "vod_pic": "https://example.com/poster2.jpg",
                "vod_remarks": "全 12 集",
                "vod_year": "2025",
                "vod_area": "韩国",
                "vod_content": "这是一部测试电视剧"
            }
        ]
    });
};

/**
 * 分类内容
 * @param {string} tid - 分类 ID
 * @param {string} pg - 页码
 * @param {Object} extend - 扩展参数（筛选条件）
 * @returns {string} JSON 字符串，包含视频列表
 */
spider.categoryContent = function(tid, pg, extend) {
    console.log("分类内容：tid=" + tid + ", pg=" + pg);
    return JSON.stringify({
        "page": parseInt(pg),
        "pagecount": 5,
        "limit": 20,
        "total": 100,
        "list": [
            {
                "vod_id": "test_" + tid + "_" + pg,
                "vod_name": "分类测试-" + tid + "-" + pg,
                "vod_pic": "https://example.com/poster.jpg",
                "vod_remarks": "测试中",
                "vod_year": "2026",
                "vod_area": "测试地区"
            }
        ]
    });
};

/**
 * 搜索内容
 * @param {string} keyword - 搜索关键词
 * @param {string} pg - 页码
 * @returns {string} JSON 字符串，包含搜索结果
 */
spider.searchContent = function(keyword, pg) {
    console.log("搜索：" + keyword + " 第" + pg + "页");
    return JSON.stringify({
        "list": [{
            "vod_id": "search_001",
            "vod_name": "搜索结果-" + keyword,
            "vod_pic": "https://example.com/search.jpg",
            "vod_remarks": "搜索命中",
            "vod_year": "2026"
        }]
    });
};

/**
 * 详情内容
 * @param {string} ids - 视频 ID
 * @returns {string} JSON 字符串，包含详细信息和播放地址
 */
spider.detailContent = function(ids) {
    console.log("详情：" + ids);
    return JSON.stringify({
        "list": [{
            "vod_id": ids,
            "vod_name": "测试详情",
            "vod_pic": "https://example.com/detail.jpg",
            "vod_year": "2026",
            "vod_area": "中国",
            "vod_director": "测试导演",
            "vod_actor": "测试演员 1，测试演员 2",
            "vod_content": "这是测试视频的详细介绍内容",
            "vod_play_from": "qnq,hdm3u8",
            "vod_play_url": "第 01 集$https://test.com/play/01.m3u8#第 02 集$https://test.com/play/02.m3u8"
        }]
    });
};

/**
 * 播放解析
 * @param {string} vod_id - 视频 ID
 * @param {string} flag - 播放来源标识
 * @param {string} url - 播放地址
 * @returns {string} JSON 字符串，包含解析后的播放地址
 */
spider.playerContent = function(vod_id, flag, url) {
    console.log("播放解析：" + url + " 来源：" + flag);
    return JSON.stringify({
        "parse": 0,
        "playUrl": "",
        "url": url.replace("#", ""),
        "header": {
            "User-Agent": "Mozilla/5.0",
            "Referer": "https://example.com/"
        }
    });
};

function formatTime(date) {
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()

    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()


    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}

module.exports = {
    formatTime: formatTime,
    jsonGet:jsonGet,
    jsonPost:jsonPost
}
/**
 *json格式发送数据
 * @param data 请求数据
 * @param url  请求地址
 * @param successCallback 成功后回调函数
 */
function jsonPost(data, url, successCallback) {
    if(data==null){
        data={};
    }
    wx.request({
        url: getUrl(url),//请求的url
        data: data,
        header: {//请求头
            'Content-Type': 'application/json;charset=UTF-8'
        },
        method: "POST",
        success: successCallback
    })
}
function jsonGet(data, url, successCallback) {
    if(data==null){
        data={};
    }
    return wx.request({
        url:getUrl(url),//请求的url
        data: data,
        header: {//请求头
            'Content-Type': 'application/json;charset=UTF-8'
        },
        method: "GET",
        success: successCallback
    })
}
/**
 * 配置回调地址
 * @param url 相对地址
 * @returns {string} 完整地址
 */
function getUrl(url) {
    return "https://renrenweb.club:8443"+url;
}
//index.js
//获取应用实例
var util = require('../../utils/util.js')
var app = getApp()
Page({
    data: {
        bookTip: '最新书籍列表',
        userInfo: {}
    },
    //事件处理函数
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function () {
        console.log('onLoad')
        var that = this
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function (userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })

       util.jsonGet(null,"/books",function (resp) {
            that.setData({
                books:resp.data
            })
        })
    },
    /*跳转内容*/
    toContent:function (event) {
        var val = event.target.dataset.val;
        console.log(val)
        wx.navigateTo({
            url: '../bookContent/content?bookName='+val
        })
    }
})



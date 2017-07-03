/**
 * Created by Administrator on 2017/6/29.
 */
var util = require('../../utils/util.js')
Page({
    data: {
        nickname:'default',
        titles:["第一章 哈哈","第二章 啊啊","第三章 呵呵"],
        logs: [],
        title:"",
        content:""
    },
    onLoad: function (options) {
        var scope=this
        util.jsonPost(options,"/content",function (resp) {
            scope.setData({
                bookMess:resp.data
            });
        })
    },
    titleChange:function (e) {
        const val = e.detail.value
        var title = this.data.titles[val[0]];
        var content;
        if(title=="第一章 哈哈"){
            content="哈";
        }
        if(title=="第二章 啊啊"){
            content="啊啊";
        }
        if(title=="第三章 呵呵"){
            content="呵呵";
        }
        this.setData({
             title:title,
            content:content
        })
    }
})
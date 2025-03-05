const app = getApp()
Page({
    data: {
        userInfo: {},
    },
    getUserInfo: function (e) {
        if (!e.detail.userInfo) {
            return;
        }
        this.setData({  
            userInfo: e.detail.userInfo
        })
    },
    onLoad: function () {
        const that = this;
        wx.request({
            url: 'http://localhost:8000/items',
            success: function (res) {
                that.setData({
                    items: res.data.items
                })
            }   
        })
    },
})
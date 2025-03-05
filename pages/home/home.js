const app = getApp()
Page({
    data: {
        items: [],
        inputValue: '',
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
const app = getApp()
Page({
    data: {
        items: [],
        inputValue: '',
    },
    addItem: function (e) {
        const newItem = this.data.inputValue.trim()
        if (!newItem) {
            return
        }
        const itemArr = [...this.data.items, newItem]
        wx.setStorageSync('items', itemArr);
        this.setData({
            items: itemArr,
            inputValue: ''
        });
    },
    onLoad: function () {
        const itemArr = wx.getStorageSync('items') || []
        this.setData({
            items: itemArr
        });
    },
})
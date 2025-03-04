const app = getApp()
Page({
    data: {
        name: '小明',
        now: app.globalData.now,
    },
    /*
    * 同一事件在同一个元素上面会触发两次: 一次捕获, 一次冒泡
    * 事件捕获: 从外到内 
    * 事件冒泡: 从内到外
    */
    handleClick: function() {
        this.setData({
            name: '小红'
        })
    }
})
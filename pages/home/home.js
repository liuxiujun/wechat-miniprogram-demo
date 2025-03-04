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
    handleClick: function(event) {
        const that = this;
        wx.showModal({
            title: '提示',
            content: '确定要修改名字吗?',
            success: function(res) {
                if (res.confirm) {
                    that.setData({
                        name: '小红'
                    }, function() {
                        wx.showToast({
                            title: '名字修改成功',
                            icon: 'success',
                            duration: 2000
                        });
                    });
                } 
                else if (res.cancel) {
                    console.log('用户点击取消');
                }
            }
        })
    }
})
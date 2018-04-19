//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isShow: false,
    inputValue: '',
    todolists: [{value: 'apple'}, {value: 'pear'}]
  },
  bindKeyInput(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  addTodo() {
    
    
    // wx.showToast({
    //   title: '成功',
    //   icon: 'success',
    //   duration: 2000
    // })
    // 确认弹窗
    // wx.showModal({
    //   title: '提示',
    //   content: '确定添加内容？',
    //   success: res => {
    //     if (res.confirm) {
    //       console.log('用户点击确定');
    //       this.data.todolists.push({value:this.data.inputValue});
    //       this.setData({
    //         inputValue: '',
    //         todolists: this.data.todolists
    //       })
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })
    wx.vibrateLong({
      success() {
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 500
        })
      },
      fail() {
        wx.showToast({
          title: 'fail',
          icon: 'fail',
          duration: 500
        })
      },
      complete() {
        wx.showToast({
          title: 'complete',
          icon: 'complete',
          duration: 500
        })
      }

    })
    console.log('add:', this.data.todolists)
  },
  deleteTodo(e) {
    // this.data.todolists.splice()
    let index = e.target.dataset.index;
    this.data.todolists.splice(index, 1);

    this.setData({
      todolists: this.data.todolists
    })

    console.log('delete:', index, this.data.todolists)
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  clickMe() {
    
    console.log(222, this.data.isShow);
    let hasClicked = false;
    this.setData({isShow: !this.data.isShow})
    
    wx.scanCode({
      success: (res) => {
        console.log(333,res)
        wx.navigateTo({    //保留当前页面，跳转到应用内的某个页面（最多打开5个页面，之后按钮就没有响应的）
          url: res.result
        })
      }
    })
    
    
  },
    /**
 * 生命周期函数--监听页面初次渲染完成
 */
onReady: function () {
  //获得dialog组件
  this.dialog = this.selectComponent("#dialog");
},

showDialog(){
  this.dialog.showDialog();
},

 //取消事件
_cancelEvent(){
  console.log('你点击了取消');
  this.dialog.hideDialog();
},
//确认事件
_confirmEvent(){
  console.log('你点击了确定');
  this.dialog.hideDialog();
}
})

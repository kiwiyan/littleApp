Component({

    behaviors: [],
  
    properties: {
      myProperty: { // 属性名
        type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
        value: '', // 属性初始值（可选），如果未指定则会根据类型选择一个
        observer: function(newVal, oldVal){} // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
      },
      myProperty2: String // 简化的定义方式
    },
    data: {
      inputValue: '',
      todolists: [{value: 'apple'}, {value: 'pear'}]
    }, // 私有数据，可用于模版渲染
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
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function(){},
    moved: function(){},
    detached: function(){},
  
    methods: {
      onMyButtonTap: function(){
        this.setData({
          // 更新属性和数据的方法与更新页面数据的方法类似
        })
      },
      _myPrivateMethod: function(){
        // 内部方法建议以下划线开头
        this.replaceDataOnPath(['A', 0, 'B'], 'myPrivateData') // 这里将 data.A[0].B 设为 'myPrivateData'
        this.applyDataUpdates()
      },
      _propertyChange: function(newVal, oldVal) {
  
      }
    }
  
  })
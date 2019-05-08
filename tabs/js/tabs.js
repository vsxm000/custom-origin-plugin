
  /*
    tab 切换
    2. 制造一个对象
      - 有一个属性 containerBox => 最外层的 div 容器
      - 有一个属性 titleList => ul 里面所有的 li
      - 有一个属性 contentList => ol 里面所有的 li
      - 有一个方法 bindEvent => 给 titleList 里面的每一个 li 添加一个点击事件
  */

function Tabs(ele, type) {
  this.type = type || 'click' // 事件类型
  this.containerBox = document.querySelector(ele) 
  this.titleList = this.containerBox.querySelectorAll('ul > li')
  this.contentList = this.containerBox.querySelectorAll('ol > li')
  this.bindEvent()
}

Tabs.prototype.bindEvent = function () {
  var _this = this
  for (var i = 0; i < this.titleList.length; i++) {
    this.titleList[i].index = i
    this.titleList[i].addEventListener(this.type, function () {
      // 事件处理函数
      // this => 事件源
      // console.log(this)
      // console.log(a)
      // 循环的是实例中的 titleList 属性 => 保存着所有 ul > li 的数组
      for (var j = 0; j < _this.titleList.length; j++) {
        // 让实例中 titleList 这个数组中的每一项移除类名
        _this.titleList[j].className = ''
        // 让实例中 contentList 这个数组中的每一项移除类名
        _this.contentList[j].className = ''
      }
      // 让当前点击的这个元素添加 active 类名
      // this => 当前点击的元素
      this.className = 'active'
      // 让实例中的 contentList 数组里面，索引和我自己对应的那个添加类名
      _this.contentList[this.index].className = 'active'
    })
  }
}

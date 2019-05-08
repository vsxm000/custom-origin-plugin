# TABS
- 一个专门用来实现 tab 切换功能的插件
- 请按照格式书写 html 结构

## HTML
- `ul` 和 `ol` 不能变
- `li` 两个盒子里面的要数量一致
```html
<div id="container">
  <ul>
    <li class="active">1</li>
    <li>2</li>
    <li>...</li>
  </ul>

  <ol>
    <li class="active">1</li>
    <li>2</li>
    <li>...</li>
  </ol>
</div>
```

## CSS
- 引入指定css 文件
```html
<link rel="stylesheet" href="./css/tabs.css">
```

## JS
- 引入制定 JS 文件
```html
<script src="./js/tabs.js"></script>
```

## 实现 tab 切换
- 接受一个参数，布局容器的 id 名称
```js
new Tabs('#container')
```

## 完成
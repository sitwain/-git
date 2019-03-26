1.编写一个函数 unique(arr)，返回一个去除数组内重复的元素的数组。例如：

unique([0, 1, 2, 2, 3, 3, 4]) // => [0, 1, 2, 3, 4]
unique([0, 1, '1', '1', 2]) // => [0, 1, '1', 2]


2. DOM标签统计,判断你的代码所执行的页面用到了哪些标签。

例如，如果页面中：

<html>
  <head></head>
  <body></body>
  <script>...</script>
</html>
那么返回数组 ['html', 'head' 'body', 'script']（顺序不重要）。

const getPageTags = /* TODO */

3.根据已有的代码，写出一个简单的todolist
# 博客内容更新教程

## 📁 文件位置
博客数据文件：`assets/js/blog-data.js`

## ➕ 添加新文章

### 步骤 1：打开文件
编辑 `assets/js/blog-data.js`

### 步骤 2：在 blogPosts 数组末尾添加新文章

```javascript
var blogPosts = [
  // ... 现有文章 ...

  // 新文章（注意前面的逗号）
  ,{
    id: 4,  // 新 ID，从 4 开始递增
    title: "我的医学学习心得",
    category: "Medical",  // 分类：Medical, Research, Technology 或自定义
    date: "2025-01-20",  // 发布日期
    author: "July",
    image: "assets/img/portfolio-1.jpg",  // 使用现有图片或上传新图片
    excerpt: "这是文章摘要，显示在博客列表卡片上，建议 50-100 字...",
    content: `
      <p>这里开始写正文内容。可以使用 HTML 标签格式化文本。</p>

      <h2>一级标题</h2>
      <p>这是一个段落。可以写很长的内容。</p>

      <h3>二级标题</h3>
      <p>更多段落内容...</p>

      <ul>
        <li>列表项 1</li>
        <li>列表项 2</li>
        <li>列表项 3</li>
      </ul>

      <blockquote>
        这是一段引用文字，适合用来引用名言或重要观点。
      </blockquote>

      <p>可以使用 <strong>粗体</strong> 和 <em>斜体</em>。</p>

      <p>代码示例：<code>console.log('Hello')</code></p>

      <h2>总结</h2>
      <p>文章结尾内容...</p>
    `
  }
];
```

## ✏️ 修改文章

找到对应 id 的文章，直接修改字段：

```javascript
{
  id: 1,
  title: "新标题",           // 修改标题
  category: "Technology",   // 修改分类
  date: "2025-02-01",       // 修改日期
  excerpt: "新的摘要...",   // 修改摘要
  content: `新的内容...`    // 修改正文
}
```

## ❌ 删除文章

### 方法 1：完全删除
找到文章对象，删除整个大括号及内容：

```javascript
var blogPosts = [
  { id: 1, ... },  // 保留
  // 删除 id: 2 的文章 - 直接删除下面整段
  // { id: 2, ... },
  { id: 3, ... }   // 保留
];
```

### 方法 2：临时隐藏（推荐）
在文章对象前加双斜杠注释：

```javascript
// {
//   id: 2,
//   title: "暂时不显示的文章",
//   ...
// },
```

## 📊 字段说明

| 字段 | 必填 | 说明 | 示例 |
|------|------|------|------|
| id | ✅ | 唯一标识，递增数字 | 1, 2, 3... |
| title | ✅ | 文章标题 | "我的研究心得" |
| category | ✅ | 分类标签 | Medical / Research / Technology |
| date | ✅ | 发布日期 | "2025-01-20" |
| author | ✅ | 作者名字 | "July" |
| image | ✅ | 封面图路径 | "assets/img/portfolio-1.jpg" |
| excerpt | ✅ | 摘要（50-150字） | "这是文章简介..." |
| content | ✅ | 正文内容（HTML格式） | `<p>内容...</p>` |

## 🎨 正文支持的 HTML 标签

```html
<!-- 段落 -->
<p>段落文本</p>

<!-- 标题 -->
<h2>大标题</h2>
<h3>小标题</h3>

<!-- 列表 -->
<ul>
  <li>无序列表项</li>
</ul>

<ol>
  <li>有序列表项</li>
</ol>

<!-- 引用 -->
<blockquote>引用文字</blockquote>

<!-- 代码 -->
<code>内联代码</code>

<pre>
代码块
多行代码
</pre>

<!-- 格式化 -->
<strong>粗体</strong>
<em>斜体</em>

<!-- 图片 -->
<img src="assets/img/图片名.jpg" alt="描述">

<!-- 链接 -->
<a href="https://example.com">链接文本</a>
```

## 💡 实用技巧

### 1. 使用模板快速创建
复制现有文章，修改内容即可。

### 2. 分类规范
建议使用固定的几个分类：
- **Medical** - 医学相关
- **Research** - 科研学习
- **Technology** - 技术开发
- **Life** - 生活随笔

### 3. 图片建议
- 使用现有图片：`assets/img/portfolio-1.jpg` 等
- 添加新图片：将图片放到 `assets/img/` 目录，然后引用

### 4. 日期格式
必须使用 `YYYY-MM-DD` 格式，如：`2025-01-20`

### 5. 内容编写
- 摘要：50-150 字，吸引读者点击
- 正文：使用 `<h2>` 和 `<h3>` 组织结构
- 段落：每段不要太长，保持可读性

## 🚀 发布流程

1. **编辑** `assets/js/blog-data.js`
2. **保存** 文件
3. **更新 RSS 订阅源**（新增 / 修改 / 删除文章后都要跑一次）：
   ```bash
   node scripts/generate-feed.js
   ```
   这会从 `blog-data.js` 重新生成 `feed.xml`。订阅地址为
   `https://july0709.github.io/feed.xml`，读者把它添加进 Fluent Reader、
   Feedly 等 RSS 阅读器即可订阅博客更新。
4. **提交** git：
   ```bash
   git add assets/js/blog-data.js feed.xml
   git commit -m "Add new blog post: 文章标题"
   git push
   ```
5. **部署** 到 GitHub Pages（通过 PR 合并到 main）

## ❗ 常见错误

### 错误 1：缺少逗号
```javascript
// ❌ 错误
{id: 1, ...}
{id: 2, ...}  // 前面的对象后面缺少逗号

// ✅ 正确
{id: 1, ...},  // 有逗号
{id: 2, ...}
```

### 错误 2：content 引号错误
```javascript
// ❌ 错误
content: "<p>内容</p>"  // 双引号内不能直接用 HTML

// ✅ 正确
content: `<p>内容</p>`  // 使用反引号（在键盘 Tab 键上方）
```

### 错误 3：ID 重复
每篇文章的 id 必须唯一，不能重复。

## 📞 需要帮助？
如有问题，可以参考现有的 3 篇示例文章的格式！

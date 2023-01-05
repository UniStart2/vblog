---
lang: zh-CN
date: 2023-01-01
title: VuePress 测试页面
description: VuePress 测试页面
# 页面head标签内添加额外标签
head:
  - [meta, {charset: 'utf-8'}]
  - [meta, {name: 'application-name', content: "unistart's vue blog" }]
  - [meta, {name: 'author', content: 'unistart'}]
  - [meta, {name: 'keywords', content: 'unistart,unistart2,vue,vue2,vu3,study'}]
---

# Hello VuePress
## 链接
```markdown
<!--相对路径-->
[关于](./about/about.md)

[友链](./friends/friends.md)

<!--绝对路径-->
[首页(en-US)](/README.md)

<!-- URL -->
[GitHub](https://github.com) 
```
<!--相对路径-->
[关于](./about/about.md)

[友链](./friends/friends.md)

<!--绝对路径-->
[首页(en-US)](/README.md)

<!-- URL -->
[GitHub](https://github.com) 

## 代码块
### 行高亮
````markdown
```ts{1,6-8}
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```
````
结果
```ts{1,6-8}
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```

### 行号
你可以在代码块添加`:line-numbers`或`:no-line-numbers`标记来覆盖配置项中的设置
````markdown
```ts
// 行号默认是启用的
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:no-line-numbers
// 行号被禁用
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```
````
结果
```ts
// 行号默认是启用的
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:no-line-numbers
// 行号被禁用
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

### v-pre
> 由于`模板语法`可以在`Markdown`中使用，它也同样可以在代码块中生效。
> 
> 为了避免你的代码块被`Vue`编译，`VuePress`默认会在你的代码块添加`v-pre`指令。这一默认行为可以在配置中关闭。
> 
> 你可以在代码块添加`:v-pre`或`:no-v-pre`标记来覆盖配置项中的设置。
````md
```md
<!-- 默认情况下，这里会被保持原样 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```md:no-v-pre
<!-- 这里会被 Vue 编译 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```js:no-v-pre
// 由于 JS 代码高亮，这里不会被正确编译
const onePlusTwoPlusThree = {{ 1 + 2 + 3 }}
```
````
结果
```md
<!-- 默认情况下，这里会被保持原样 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```md:no-v-pre
<!-- 这里会被 Vue 编译 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```js:no-v-pre
// 由于 JS 代码高亮，这里不会被正确编译
const onePlusTwoPlusThree = {{ 1 + 2 + 3 }}
```

## 导入代码块
导入全部代码
```md
@[code](../.vuepress/dist/404.html)
```
结果
@[code](../.vuepress/dist/404.html)

导入部分代码
```md
@[code{1-11}](../.vuepress/config.ts)
```
结果
@[code{1-11}](../.vuepress/config.ts)

显示指定代码语言
```md
@[code{12-25} ts](../.vuepress/config.ts)
```
结果
@[code{12-25} ts](../.vuepress/config.ts)

>实际上，[] 内的第二部分会被作为代码块标记来处理，因此在上面 代码块 章节中提到的语法在这里都可以支持
复杂shili
```md
@[code{26-50} ts{1-10,15-18,20,22,24}:line-numbers](../.vuepress/config.ts)
```
结果
@[code{26-50} ts{1-10,15-18,20,22,24}:line-numbers](../.vuepress/config.ts)

## 在Markdown中使用Vue
### 模板语法
- markdown中允许使用MHTML
- Vue模版语法和HTML是兼容的
```md
模板语法示例：1 + 1 = {{ 1 + 1 }}

<span v-for="i in 3">{{ i }} </span>
```
输出
> 模板语法示例：1 + 1 = {{ 1 + 1 }}
> 
> <span v-for="i in 3">{{ i }} </span>

### Markdown中直接使用Vue组件
```md
- VuePress - <Badge type="tip" text="v2" vertical="top" />
- VuePress - <Badge type="warning" text="v2" vertical="middle" />
- VuePress - <Badge type="danger" text="v2" vertical="bottom" />
```
输出
- VuePress - <Badge type="tip" text="v2" vertical="top" />
- VuePress - <Badge type="warning" text="v2" vertical="middle" />
- VuePress - <Badge type="danger" text="v2" vertical="bottom" />


````md{3,9,11,17}
<CodeGroup>
  <CodeGroupItem title="rust">

```rs:line-numbers
fn main() {
  println!("Hello, Rust");
}
```

  </CodeGroupItem>

  <CodeGroupItem title="javascript">

```js:line-numbers
console.log("Hello, javascript")
```

  </CodeGroupItem>
</CodeGroup>
````
输出
<CodeGroup>
  <CodeGroupItem title="rust">

```rs:line-numbers
fn main() {
  println!("Hello, Rust");
}
```

  </CodeGroupItem>

  <CodeGroupItem title="javascript">

```js:line-numbers
console.log("Hello, javascript")
```

  </CodeGroupItem>
</CodeGroup>

## 自定义容器
### 提示框
````md
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签
:::

::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```ts
console.log('你好，VuePress！')
```
:::
````
输出
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签
:::

::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```ts
console.log('你好，VuePress！')
```
:::

### CodeGroup
````md
:::: code-group
::: code-group-item FOO
```ts
const foo = 'foo'
```
:::
::: code-group-item BAR
```ts
const bar = 'bar'
```
:::
::::
````
输出

:::: code-group
::: code-group-item FOO
```ts
const foo = 'foo'
```
:::
::: code-group-item BAR
```ts
const bar = 'bar'
```
:::
::::
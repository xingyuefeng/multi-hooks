---
title: useSize
group:
  title: State
  path: /state
---

# useSize

在两个状态值间切换的 Hook。



## 代码演示

### 基础用法


<code src="./demos/demo1.tsx" />



## API


### 参数

| 参数 | 说明                                     | 类型         | 默认值 |
| ---- | ---------------------------------------- | ------------ | ------ |
| target   | dom节点或者ref | `HTMLElement` | `() =>HTMLElement` | MutableRefObject | -      |


### 结果

| 参数 | 说明                                     | 类型         | 默认值 |
| ---- | ---------------------------------------- | ------------ | ------ |
| currentSize   | dom尺寸 | { width: number, height: number } | -      |

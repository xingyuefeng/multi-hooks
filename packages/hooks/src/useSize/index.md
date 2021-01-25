---
title: useSize
group:
  title: Dom操作
  path: /dom
---

# useSize

一个用于监听 dom 节点尺寸变化的 Hook。


## 代码演示

### 基础用法


<code src="./demos/demo1.tsx" />




## API

```typescript
useSize(target);
```

### 参数

| 参数 | 说明                                     | 类型         | 默认值 |
| ---- | ---------------------------------------- | ------------ | ------ |
| target   | dom节点或者ref | `HTMLElement` | `() =>HTMLElement` | MutableRefObject | -      |


### 结果

| 参数 | 说明                                     | 类型         | 默认值 |
| ---- | ---------------------------------------- | ------------ | ------ |
| currentSize   | dom尺寸 | { width: number, height: number } | -      |

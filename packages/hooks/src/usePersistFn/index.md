---
title: usePersistFn

group:
  title: Advanced
  path: /advanced
---

# usePersistFn

持久化 function 的 Hook。


## 代码演示

### 基础用法

<code src="./demos/demo1.tsx" />


## API

```typescript
useMount(fn: () => void | fn );
```

### 返回

| 参数 | 说明                                     | 类型          |
| ---- | ---------------------------------------- | ------------ |
| fn   | 引用地址永远不会变化的 fn | (...args: any[]) => any  |


### 参数

| 参数 | 说明                                     | 类型         | 默认值 |
| ---- | ---------------------------------------- | ------------ | ------ |
| fn   | 需要持久化的函数 | (...args: any[]) => any    | -  |

---
title: useUnmount

group:
  title: LifeCycle
  path: /life-cycle
---

# useUnmount

只在组件 unmount 时执行的 hook。

## 代码演示

### 基础用法

<code src="./demos/demo1.tsx" />

## API

```typescript
useMount(fn: () => void | fn );
```

### 参数

| 参数 | 说明                                     | 类型         | 默认值 |
| ---- | ---------------------------------------- | ------------ | ------ |
| fn   | unmount 时执行的函数 | `() => fn()` | -      |

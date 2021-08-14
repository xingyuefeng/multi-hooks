---
title: useInterval

group:
  title: SideEffect
  path: /side-effect
---

# useInterval

定时器hook。

## 代码演示

### 基础用法1

<code src="./demos/demo1.tsx" />

### 基础用法2

<code src="./demos/demo2.tsx" />

## API

```typescript
useInterval(fn: () => void, interval: number, options?: {immediate?: boolean});
```

### 参数

| 参数 | 说明                                     | 类型         | 默认值 |
| ---- | ---------------------------------------- | ------------ | ------ |
| fn   | 执行的函数 | `() => fn()` | -      |

---
title: useUpdateEffect

group:
  title: LifeCycle
  path: /life-cycle
---

# useUpdateEffect

只在组件依赖更新时执行的 hook。

## 代码演示

### 基础用法

<code src="./demos/demo1.tsx" />

## API

```typescript
useUpdateEffect(
  effect: () => (void | (() => void | undefined)),
  deps?: deps,
)
```

### 参数

| 参数 | 说明                                     | 类型         | 默认值 |
| ---- | ---------------------------------------- | ------------ | ------ |
| fn   | mount 时执行的函数, 返回函数组件卸载执行 | `() => fn()` | -      |

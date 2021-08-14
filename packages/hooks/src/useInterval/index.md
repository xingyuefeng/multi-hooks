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
useInterval(fn: () => void, interval: number, options?: Options);
```

### Params

| 参数    | 说明                                                    | 类型       |
|---------|---------------------------------------------------------|------------|
| fn      | 要重复调用的函数                                        | `() => void` |
| delay   | 间隔时间，当取值为 `null` 或 `undefined` 时会停止计时器 |   `number` \| `undefined` \| `null`    |
| options | 配置计时器的行为，详见下面的 Options                    | `Options`     |


### Options

| 参数      | 说明                                     | 类型    | 默认值 |
|-----------|------------------------------------------|---------|--------|
| immediate | 参数可以用来控制是否在首次渲染时立即执行 | `boolean` | `false`  |

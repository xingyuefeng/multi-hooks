---
title: useToggle
group:
  title: State
  path: /state
---

# useToggle

在两个状态值间切换的 Hook。



## 代码演示

### 用法1


<code src="./demos/demo1.tsx" />

### 用法2


<code src="./demos/demo2.tsx" />



## API

```typescript

const [state, { toggle, setLeft, setRight }] = useToggle(
  defaultValue?: boolean,
);
const [state,{ toggle, setLeft, setRight }] = useToggle(
  defaultValue: any = false,
  reverseValue?: any,
);


```

### 参数

| 参数 | 说明                                     | 类型         | 默认值 |
| ---- | ---------------------------------------- | ------------ | ------ |
| defaultValue	   | 可选项，传入默认的状态值 | `number` | `string` | `boolean` | `undefined`  |  false     |
| reverseValue	   | 可选项，传入取反值      | `number` | `string` | `boolean` | `undefined`  |    -       |


### 结果

| 参数 | 说明                                     | 默认值 |
| ---- | ----------------------------------------| ------ |
| state   | 状态值 | -      |
| actions   | 操作集合	 | `Actions`    |



### Actions

| 参数 | 说明                                     | 类型         |
| ---- | ----------------------------------------| ---------- |
| toggle   |   状态值                             | (state?: number \| boolean \| string \| undefined) => void    |
| setLeft  |   设置`defaultValue`                 | () => void   |
| setRight |   设置`reverseValue`                 | () => void    |




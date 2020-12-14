/**
 * title: 基础用法
 * desc: 函数调用始终是最新状态
 */

import React, { useState } from 'react';
import { message } from 'antd';
import { useUnmount } from 'yhooks';


export default  () => {
  const [count, setCount] = useState(0);
  useUnmount(() => {
    message.info('comp unmount' + count);
  });
  return (
    <>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
};
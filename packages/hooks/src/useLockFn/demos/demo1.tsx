/**
 * title: 避免重复提交
 * desc: 在`submit` 函数执行完成前，其余的点击动作都会被忽略。

 */

import React, { useState } from 'react';
import { message } from 'antd';
import { useLockFn } from 'yhooks';

function mockApiRequest() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}
export default () => {
  const [count, setCount] = useState(0);
  const submit = useLockFn(async () => {
    message.info('Start to submit');
    await mockApiRequest();
    setCount((val) => val + 1);
    message.success('Submit finished');
  });
  return (
    <>
      <p>Submit count: {count}</p>
      <button onClick={submit}>Submit</button>
    </>
  );
};

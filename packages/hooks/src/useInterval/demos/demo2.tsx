import React, { useState } from 'react';
import { useInterval } from 'yhooks';
import { Button } from 'antd';

export default () => {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);

  useInterval(() => {
    setCount(count + 1);
  }, delay, { immediate: true },);

  return (
    <>
      <Button onClick={() => {
				setDelay(delay + 1000)
			}}>延迟+1秒</Button>
      <Button onClick={() => {
				setDelay(1000)
			}}>重置</Button>
      <Button onClick={() => {
				setDelay(null)
			}}>取消定时器</Button>
      <div>count: {count}</div>
    </>
  );
};

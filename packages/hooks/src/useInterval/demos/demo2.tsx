/**
 * title: 进阶用法
 * desc: 设置定时器时间，清除定时器。
 */

import React, { useState } from 'react';
import { useInterval } from 'yhooks';

export default () => {
  const [nums, setNums] = useState(0);
  const [interval, setInterval] = useState(1000);

  useInterval(() => {
    setNums(nums + 1);
  }, interval);
  return (
    <>
      <div>nums: {nums}</div>
      <button onClick={() => setInterval(interval + 1000)}>时间加1000</button>
      <button onClick={() => setInterval(1000)}>重置定时器</button>
      <button onClick={() => setInterval(null)}>清除定时器</button>
    </>
  );
};

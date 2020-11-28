/**
 * title: Default usage
 * desc: 请点击按钮不计数，按钮之外区域计数
 *
 */

import React, { useState, useRef, MutableRefObject } from 'react';
import { message } from 'antd';
import { useClickAway } from 'yhooks';


export default () => {
  const [counter, setCounter] = useState(0);
  
  const ref = useRef<HTMLDivElement>(null);

  useClickAway(() => {
    setCounter((s) => s + 1);
  }, ref);

  return (
    <div>
      <span ref={ref}>
        <button type="button">box1</button>
      </span>
      <p>counter: {counter}</p>
    </div>
  );
};
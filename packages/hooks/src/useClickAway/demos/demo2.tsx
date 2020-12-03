/**
 * title: Default usage
 * desc: 支持
 *
 */

import React, { useState, useRef, MutableRefObject } from 'react';
import { message } from 'antd';
import { useClickAway } from 'yhooks';


export default () => {
  const [counter, setCounter] = useState(0);
  
  const ref1 = useRef<HTMLButtonElement>(null);
  const ref2 = useRef<HTMLButtonElement>(null);

  useClickAway(() => {
    setCounter((s) => s + 1);
  }, [ref1, ref2]);

  return (
    <div>
      <button ref={ref1} type="button">box1</button>
      <button ref={ref2} type="button">box2</button>
        

      <p>counter: {counter}</p>
    </div>
  );
};
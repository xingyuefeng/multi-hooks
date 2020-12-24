/**
 * title: 基础用法
 * desc: 通过 usePersistFn，函数引用永远不会变化，示例中 showCountPersistFn 是不会变化的，showCountCommon 在 count 变化时变化。
 */

import React, { useState, memo, useRef } from 'react';
import { message } from 'antd';
import { usePersistFn } from 'yhooks';


export default () => {
  const [count, setCount] = useState(0)

  const showCountPersistFn = usePersistFn(() => {
    message.info(`Current count is ${count}`);
  });  
  return (
    <>
     
    </>
  );
};


// some expensive component with React.memo
const ExpensiveTree = memo<{ [key: string]: any }>(({ showCount }) => {
  const renderCountRef = useRef(0);
  renderCountRef.current += 1;
  return (
    <div>
      <p>Render Count: {renderCountRef.current}</p>
      <button type="button" onClick={showCount}>
        showParentCount
      </button>
    </div>
  );
});
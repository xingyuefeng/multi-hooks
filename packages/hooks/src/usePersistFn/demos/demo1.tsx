/**
 * title: 基础用法
 * desc: 通过 usePersistFn，函数引用永远不会变化，示例中 showCountPersistFn 是不会变化的，showCountCommon 在 count 变化时变化。
 */

import React, { useState, memo, useRef, useCallback } from 'react';
import { message } from 'antd';
import { usePersistFn } from 'yhooks';

export default () => {
  const [count, setCount] = useState(1);

  const showCountPersistFn = usePersistFn(() => {
    message.info(`Current count is ${count}`);
  });

  const showCountCommon = useCallback(() => {
    message.info(`Current count is ${count}`);
  }, [count]);


  return (
    <>
      <button
        type="button"
        onClick={() => {
          setCount(c => c + 1);
        }}
      >
        Add Count
      </button>
      <p>
        使用usePersistFn 跟useCallback的区别
      </p>
      <div style={{ marginTop: 32 }}>
        <h4>Component with persist function:</h4>
        {/* use persist function, ExpensiveTree component 不会重新render， 但能获取到count最新值 */}
        <ExpensiveTree showCount={showCountPersistFn} />
      </div>
      <div style={{ marginTop: 32 }}>
        <h4>Component without persist function:</h4>
        {/* without persist function, ExpensiveTree component count更新， 组件重新render */}
        <ExpensiveTree showCount={showCountCommon} />
      </div>
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

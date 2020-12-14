/**
 * title: 基础用法
 * desc: 在组件卸载时，执行方法。
 */

import React, { useState } from 'react';
import { message } from 'antd';
import { useUnmount } from 'yhooks';

const MyComponent = () => {
  useUnmount(() => {
    message.info('useUnmount');
  });

  return <div>Hello World</div>;
};

export default () => {
  const [state, setState] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setState(!state)}>
        {state ? 'unmount' : 'mount'}
      </button>
      {state && <MyComponent />}
    </>
  );
};

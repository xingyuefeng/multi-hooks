/**
 * title: 基础用法
 * desc: 在组件加载时，执行方法。
 */

import React, { useState } from 'react';
import { message } from 'antd';
import { useMount } from 'yhooks';

const MyComponent = () => {
  useMount(() => {
    message.info('mount');
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

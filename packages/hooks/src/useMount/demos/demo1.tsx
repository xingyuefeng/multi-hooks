/**
 * title: Default usage
 * desc: 在组件首次渲染时，执行方法
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 在组件首次渲染时，执行方法。
 */

import React, { useState } from 'react';
import { message } from 'antd';
import { useMount } from 'mhooks';

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

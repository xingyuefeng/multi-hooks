/**
 * title: 例子
 * desc: 监听 dom 节点尺寸变化
 *
 */

import React, { useRef } from 'react';
import { useSize } from 'yhooks';

export default () => {
  const ref = useRef();
  // 也可以直接传dom
  const size = useSize(ref);

  console.log(size);
  return (
    <>
      <div  ref={ref} style={{ width: 200, height: 100, border: '1px solid #ccc' }} >
      当前width: {size.width}px, height: {size.height}px
    </div>
    </>
  );
};

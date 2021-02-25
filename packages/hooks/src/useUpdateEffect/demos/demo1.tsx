import React, { useEffect, useState } from 'react';
import { useUpdateEffect } from 'yhooks';


export default () => {
  const [count, setCount] = useState(0);
  const [effectCount, setEffectCount] = useState(0);
  const [updateEffectCount, setUpdateEffectCount] = useState(0);

  useEffect(() => {
    // 首次肯定执行
    setEffectCount((c) => c + 1)
  }, [count])

  useUpdateEffect(() => {
    // 首次不执行
    setUpdateEffectCount((c) => c + 1)
  }, [count])

  return (
    <div>
      <p>effectCount: {effectCount}</p>
      <p>updateEffectCount: {updateEffectCount}</p>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
          reRender
      </button>
    </div>
  );
};
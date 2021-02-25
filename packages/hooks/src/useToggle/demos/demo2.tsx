import React from 'react';
import { useToggle } from 'yhooks';

export default () => {
  const [state, { toggle, setLeft, setRight }] = useToggle('Hello', 'World');
  return (
    <div>
      <p>Effects：{state}</p>
      <p>
        <button type="button" onClick={() => toggle()}>
          Toggle
        </button>
        <button type="button" onClick={() => toggle('Hello')} style={{ margin: '0 8px' }}>
          Toggle Hello
        </button>
        <button type="button" onClick={() => toggle('World')}>
          Toggle World
        </button>
        <button type="button" onClick={setLeft} style={{ margin: '0 8px' }}>
          Set Hello
        </button>
        <button type="button" onClick={setRight}>
          Set World
        </button>
      </p>
    </div>
  );
};
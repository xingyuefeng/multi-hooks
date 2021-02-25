import React from 'react';
import { useToggle } from 'yhooks';


export default () => {
  const [state, { toggle }] = useToggle();
  return (
    <div>
      <p>state {`${state}`}</p>
      <p>
        <button type="button" onClick={() => toggle()}>
          Toggle
        </button>
        <button type="button" onClick={() => toggle(false)} style={{ margin: '0 8px' }}>
          Toggle False
        </button>
        <button type="button" onClick={() => toggle(true)}>
          Toggle True
        </button>
      </p>
    </div>
  );
};
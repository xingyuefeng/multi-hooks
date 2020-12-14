import { useEffect, useRef } from 'react';

const useUnmount = (fn: () => any):void => {

  // 确保函数每次调用始终是最新的
  const fnRef = useRef(fn);
  fnRef.current = fn;

  useEffect(() => () => {
    if (fnRef.current && typeof fnRef.current === 'function') {
      fnRef.current()
    }
  }, []);
};

export default useUnmount;
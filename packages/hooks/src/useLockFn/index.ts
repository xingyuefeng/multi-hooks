import { useRef } from 'react';

const useLockFn = <T extends any[] = any[], P extends any = any>(fn: (...args: T) => Promise<P>) => {
  const lockRef = useRef(false);

  return async (...args: T) => {
    if (lockRef.current) return;
    lockRef.current = true;
    try {
      const req = await fn(...args);
      lockRef.current = false;
      return req;
    } catch (e) {
      lockRef.current = false;
      throw e;
    }
  };
};

export default useLockFn;

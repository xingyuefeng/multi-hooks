import { useEffect, useRef } from 'react';

export type noop = (...args: any[]) => any;

function usePersistFn<T extends noop>(fn: T){

  const fnRef = useRef<T>(fn)

  useEffect(() => {
    fnRef.current = fn;
  }, [fn]);

  const persistFnRef = useRef<T>()

  if (!persistFnRef.current) {
    persistFnRef.current = function (this: any, ...args) {
      return fnRef.current!.apply(this, args);
    } as T;
  }

  return persistFnRef.current
};

export default usePersistFn;

import { useEffect, useRef } from 'react';

const useInterval = (
  fn: () => void,
  delay: number | null | undefined,
  options?: {
    immediate?: boolean;
  },
) => {
  const immediate = options?.immediate;

  const fnRef = useRef<() => void>();

  fnRef.current = fn;

  useEffect(() => {
    if (delay === null || delay === undefined) return;
    if (immediate) {
      fnRef.current?.();
    }
    const timer = setInterval(() => {
      fnRef?.current();
    }, delay);
    return () => {
      clearInterval(timer);
    };
  }, [delay]);
};

export default useInterval;

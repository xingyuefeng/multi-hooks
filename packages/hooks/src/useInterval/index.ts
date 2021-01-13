import { useEffect, useRef } from 'react';

function useInterval(
  fn: () => void,
  delay: number | null | undefined,
  options?: {
    immediate?: boolean;
  },
) {
  const fnRef = useRef<() => void>();
  fnRef.current = fn;

  const immediate = options?.immediate;

  useEffect(() => {
    if (delay === null || delay === undefined) return;

    if (immediate) {
      fnRef.current();
    }

    const timer = setInterval(() => {
      fnRef.current();
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);
}

export default useInterval;

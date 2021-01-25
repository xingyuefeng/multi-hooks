import { useLayoutEffect, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { BasicTarget, getTargetElement } from '../utils/dom';

type Size = { width?: number; height?: number; left?: number; top?: number };

function useSize(target: BasicTarget) {
  const [currentSize, setCurrentSize] = useState<Size>(() => {
    const el = getTargetElement(target);
    return {
      height: ((el || {}) as HTMLElement).clientHeight,
      width: ((el || {}) as HTMLElement).clientWidth,
    };
  });

  useLayoutEffect(() => {
    const el = getTargetElement(target);
    if (!el) {
      return () => {};
    }

    const ro = new ResizeObserver((entries, observer) => {
      for (const entry of entries) {
        const { left, top, width, height } = entry.contentRect;
        setCurrentSize({
          width,
          height
        })
        
      }
    });
    ro.observe(el as HTMLElement);

    return () => {
      ro.disconnect();
    };
  }, [target]);

  return currentSize;
}

export default useSize;

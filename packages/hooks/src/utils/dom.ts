import { MutableRefObject } from 'react';

export type BasicTarget<T = HTMLElement> = 
  | (() => T | null)
  | T
  | null
  // ref 泛型
  | MutableRefObject<T>

type TargetElement = HTMLElement | Element | Document | Window;


export function getTargetElement(
  target?: BasicTarget<TargetElement>,
  defaultElement?: TargetElement,
): TargetElement | undefined | null  {
  if (!target) {
    return defaultElement;
  }
  let targetElement: TargetElement | undefined | null;
  // 传入的target是函数
  if (typeof target === 'function') {
    targetElement = target();
    // 传入的target是ref
  } else if ('current' in target) {
    targetElement = target.current;
  } else {
    // 传入的target是dom
    targetElement = target;
  }

  return targetElement;
}
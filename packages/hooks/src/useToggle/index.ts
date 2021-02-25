import { useState, useMemo } from 'react';

interface Actions<T = IState> {
  toggle: (value?: T) => void;
  setLeft: () => void;
  setRight: () => void;
}

type IState = number | boolean | string | undefined;

function useToggle<T = Boolean | undefined>(): [Boolean, Actions<T>];

function useToggle<T = IState>(defaultValue: T): [T, Actions<T>];

function useToggle<T = IState, U = IState>(
  defaultValue: T,
  reverseValue: U,
): [T | U, Actions<T | U>];

// 用extends 避免函数重载报错

function useToggle<D extends IState, R extends IState>(
  defaultValue: D = false as D,
  reverseValue?: R,
) {
  const [state, setState] = useState<D | R>(defaultValue);

  const actions = useMemo(() => {
    const reverseOriginValue = (reverseValue === undefined
      ? !defaultValue
      : reverseValue) as D | R;

    const toggle = (value?: D | R) => {
      // 强制切换
      if (value !== undefined) {
        setState(value);
        // 取反
      } else {
        setState(val =>
          val === defaultValue ? reverseOriginValue : defaultValue,
        );
      }
    };

    // 设置左边值
    const setLeft = () => setState(defaultValue);

    const setRight = () => setState(reverseOriginValue);

    return {
      toggle,
      setLeft,
      setRight,
    };
  }, [defaultValue, reverseValue]);

  return [state, actions];
}

export default useToggle;

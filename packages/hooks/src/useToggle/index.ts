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
    const reverseValueOrigin =
      reverseValue === undefined || reverseValue === null
        ? !defaultValue
        : reverseValue;

    const toggle = (value?: D | R) => {
      if (value !== undefined || value !== null) {
        setState(value);
      } else {
        setState(val =>
          val === defaultValue ? reverseValueOrigin : defaultValue,
        );
      }
    };
    const setLeft = () => {};
    const setRight = () => {};

    return {
      toggle,
      setLeft,
      setRight,
    };
  }, [defaultValue, reverseValue]);

  return [state, actions];
}

export default useToggle;

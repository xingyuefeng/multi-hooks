import { useState } from 'react';

interface Actions<T = IState> {
  toggle: (state?: T) => void,
  setLeft: () => void,
  setRight: () => void,
}

type IState = number | boolean | string | undefined

function useToggle<T = Boolean | undefined>() : [Boolean, Actions<T>]

function useToggle<T = IState>(defaultValue: T) : [T, Actions<T>]

function useToggle<T = IState, U = IState>(defaultValue: T, reverseValue: U ) : [T | U, Actions<T | U>]

// 用extends 避免函数重载报错

function useToggle<D extends IState , R extends IState>(
  defaultValue: D = false as D,
  reverseValue?: R,
) {
  const [state, setState] = useState(defaultValue ? defaultValue : false)

  const toggle = () => {
    
  }
  const setLeft = () => {

  }
  const setRight = () => {

  }

  return [state, {toggle, setLeft, setRight }]
  
}

export default useToggle;

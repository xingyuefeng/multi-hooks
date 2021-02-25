import { useEffect, useRef } from 'react'



const useUpdateEffect: typeof useEffect = (effect, deps) => {

  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
     return effect()
    } else {
      isMounted.current = true
    }
  }, deps)

};

export default useUpdateEffect;
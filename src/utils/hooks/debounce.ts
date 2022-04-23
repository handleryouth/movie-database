import { useCallback, useRef } from 'react'

export function useDebounce(): Function {
  const stateTracker = useRef<any>()
  const debounce = useCallback((value: Function, delay?: number) => {
    clearTimeout(stateTracker.current)
    stateTracker.current = setTimeout(() => {
      value()
    }, delay || 300)
  }, [])
  return debounce
}

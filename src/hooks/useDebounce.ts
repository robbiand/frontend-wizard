import { useEffect, useState } from 'react'

export function useDebounce<T>(value: T, delay = 300) {
  const [debounced, setDebounced] = useState(value)
  
  useEffect(() => {
    const timeout = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(timeout)
  }, [value, delay])
  
  return debounced
}

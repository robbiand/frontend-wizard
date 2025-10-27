import { useEffect } from 'react'
import { useDebounce } from './useDebounce'
import { saveDraft, loadDraft, clearDraft } from '../utils/storage'

export function useDraft<T extends object>(
  role: string,
  data: T,
  setData: (v: T) => void
) {
  const debounced = useDebounce(data, 2000)
  const key = `draft_${role}`

  useEffect(() => {
    const s = loadDraft(key)
    if (s) setData(s as T)
  }, [])

  useEffect(() => {
    if (debounced) saveDraft(key, debounced)
  }, [debounced, key])

  return {
    clear: () => clearDraft(key)
  }
}
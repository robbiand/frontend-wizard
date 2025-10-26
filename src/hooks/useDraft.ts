import { useEffect } from 'react'
import { useDebounce } from './useDebounce'
import { saveDraft, loadDraft, clearDraft } from '../utils/storage'

export function useDraft(role: string, data: object, setData: (v: object) => void) {
  const debounced = useDebounce(data, 2000)
  const key = `draft_${role}`

  useEffect(() => {
    const s = loadDraft(key)
    if (s) setData(s)
  }, [])

  useEffect(() => {
    if (debounced) saveDraft(key, debounced)
  }, [debounced, key])

  return {
    clear: () => clearDraft(key)
  }
}

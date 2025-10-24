import { useEffect } from 'react'
import { useDebounce } from './useDebounce'
import { saveDraft, loadDraft, clearDraft } from '../utils/storage'

export function useDraft(role: string, data: any, setData: (v: any) => void) {
  const debounced = useDebounce(data, 2000)
  const key = `draft_${role}`

  useEffect(() => {
    const s = loadDraft(key)
    if (s) setData(s)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (debounced) saveDraft(key, debounced)
  }, [debounced, key])

  return {
    clear: () => clearDraft(key)
  }
}

export const saveDraft = (key: string, data: any) =>
  localStorage.setItem(key, JSON.stringify(data))

export const loadDraft = (key: string) => {
  const d = localStorage.getItem(key)
  return d ? JSON.parse(d) : null
}

export const clearDraft = (key: string) => localStorage.removeItem(key)

import { useState, useEffect } from 'react'
import { useDebounce } from '../../hooks/useDebounce'

type Option = { id: number; name: string }

type AutoCompleteProps = {
  label: string;
  fetchFn: (q: string) => Promise<Option[]>;
  value?: string;
  onChange: (v: string) => void
}

export default function AutoComplete({ label, fetchFn, value, onChange }: AutoCompleteProps) {
  const [query, setQuery] = useState(value || '')
  const [options, setOptions] = useState<Option[]>([])
  const deb = useDebounce(query, 300)

  useEffect(() => {
    if (!deb) return
    let mounted = true
    fetchFn(deb).then(r => { if (mounted) setOptions(r) })
    return () => { mounted = false }
  }, [deb, fetchFn])

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input aria-label={label} value={query} onChange={e => setQuery(e.target.value)}
        className="w-full border rounded px-2 py-1" />
      {options.length > 0 && (
        <ul className="bg-white border rounded mt-1 max-h-40 overflow-auto">
          {options.map(o => (
            <li key={o.id} className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => { onChange(o.name); setQuery(o.name); setOptions([]) }}>
              {o.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

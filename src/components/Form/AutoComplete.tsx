import { useState, useEffect } from 'react'
import { useDebounce } from '../../hooks/useDebounce'

type Option = { id: number; name: string }

type AutoCompleteProps = {
  label: string
  fetchFn: (q: string) => Promise<Option[]>
  value?: string
  onChange: (v: string) => void
}

export default function AutoComplete({
  label,
  fetchFn,
  value,
  onChange
}: AutoCompleteProps) {
  const [query, setQuery] = useState(value || '')
  const [options, setOptions] = useState<Option[]>([])
  const [showOption, setShowOption] = useState(false)
  const debounced = useDebounce(query, 300)

  useEffect(() => {
    let active = true
    fetchFn(debounced).then((res) => {
      if (active) {
        setOptions(res)
      }
    })
    return () => {
      active = false
    }
  }, [debounced, fetchFn])

  return (
    <div className="mb-4 relative">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        aria-label={label}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => {
          setShowOption(true)
        }}
        className="w-full border rounded px-2 py-1"
      />

      {showOption && (options.length > 0) && (
        <ul className="absolute z-10 w-full bg-white border rounded mt-1 max-h-40 overflow-auto shadow">
          {options.map((opt) => (
            <li
              key={opt.id}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                onChange(opt.name)
                setQuery(opt.name)
                setShowOption(false)
              }}
            >
              {opt.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

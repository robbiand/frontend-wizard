import { JSX, useCallback } from 'react'
import AutoComplete from './AutoComplete'

type Types = {
  data: {
    fullName: string;
    email: string;
    department: string;
  },
  setData:(data: object)=>void
}

const Step1BasicInfo = ({ data, setData }: Types ): JSX.Element => {

  const fetchDepartments = useCallback(async (query: string) => {
    const mod = await import('../../api/departments')
    return mod.fetchDepartments(query)
  }, [])

  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Full Name</label>
        <input value={data.fullName||''} onChange={e=>setData({...data, fullName:e.target.value})}
          className="w-full border rounded px-2 py-1" />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Email</label>
        <input value={data.email||''} onChange={e=>setData({...data, email:e.target.value})}
          className="w-full border rounded px-2 py-1" />
      </div>
      

      <AutoComplete
        label="Department"
        fetchFn={fetchDepartments}
        value={data.department || ''}
        onChange={(v) => setData({ ...data, department: v })}
      />
    </div>
  )
}

export default Step1BasicInfo

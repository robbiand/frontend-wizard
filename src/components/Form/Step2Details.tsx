import { JSX } from 'react'
import AutoComplete from './AutoComplete'
import FileUpload from './FileUpload'
import { generateEmployeeId } from '../../utils/idGenerator'

type Types = {
  data: {
    employmentType?: string;
    location?: string;
    notes?: string;
    department?: string;
  };
  setData:(data: object) => void;
  seq: number
}

const Step2Details = ({ data, setData, seq }:Types): JSX.Element => {
  const eid = generateEmployeeId(data?.department || 'EMP', seq || 1)
  return (
    <div>
      <div className="mb-2 text-sm">Employee ID: <strong>{eid}</strong></div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Employment Type</label>
        <select value={data?.employmentType||''} onChange={e=>setData({...data, employmentType:e.target.value})}
          className="w-full border rounded px-2 py-1">
          <option value="">Select</option>
          <option>Full-time</option><option>Part-time</option><option>Contract</option><option>Intern</option>
        </select>
      </div>

      <AutoComplete label="Office Location" fetchFn={async (q)=> {
        const mod = await import('../../api/locations'); return mod.fetchLocations(q)
      }} value={data?.location||''} onChange={(v)=>setData({...data, location:v})} />

      <div className="mb-4">
        <label className="block text-sm font-medium">Notes</label>
        <textarea value={data?.notes||''} onChange={e=>setData({...data, notes:e.target.value})}
          className="w-full border rounded px-2 py-1" rows={4}></textarea>
      </div>

      <FileUpload onChange={(b)=>setData({...data, photo:b})} />
    </div>
  )
}

export default Step2Details

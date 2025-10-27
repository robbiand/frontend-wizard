import React, { useState } from 'react'
import Step1BasicInfo from '../components/Form/Step1BasicInfo'
import Step2Details from '../components/Form/Step2Details'
import { useDraft } from '../hooks/useDraft'
import { postBasicInfo, postDetails } from '../api/employees'

interface Basic {
  department?: string;
  fullName?: string;
  email?: string;
}

interface Details {
  employeeId?: string;
}

interface Draft {
  basic: Basic;
  details: Details;
}


export default function Wizard() {
  const params = new URLSearchParams(location.search)
  const role = (params.get('role') || 'admin').toLowerCase()
  const isAdmin = role === 'admin'
  const [step, setStep] = useState( isAdmin ? 1 : 2 )
  const [basic, setBasic] = useState<Basic>({ department: '', fullName: '', email: '' })
  const [details, setDetails] = useState<Details>({ employeeId: '' })
  const [seq] = useState(1)
  const draft = useDraft<Draft>(
    role === 'admin' ? 'admin' : 'ops',
    { basic, details },
    (v?: Partial<Draft>) => {
      setBasic(v?.basic ?? basic);
      setDetails(v?.details ?? details);
    }
  )

  const canNext = basic.fullName && basic.email && basic.department

  async function handleSubmit() {
    await postBasicInfo({...basic, employeeId: details.employeeId})
    await postDetails({...details, email: basic.email})
    alert('All done 🎉')
    draft.clear()
    setBasic({})
    setDetails({})
    setStep(isAdmin?1:2)
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl">Employee Wizard ({role})</h1>
        <div>
          <button className="text-sm mr-2" onClick={()=>draft.clear()}>Clear Draft</button>
        </div>
      </div>

      {step === 1 && isAdmin && (
        <>
          <Step1BasicInfo data={basic} setData={setBasic} />
          <div className="flex justify-end">
            <button disabled={!canNext} className="px-3 py-1 bg-blue-600 text-white rounded"
              onClick={()=>setStep(2)}>Next</button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <Step2Details data={{...details, department: basic.department}} setData={setDetails} seq={seq} />
          <div className="flex justify-between mt-4">
            {isAdmin && <button className="px-3 py-1 border rounded" onClick={()=>setStep(1)}>Back</button>}
            <div className="ml-auto">
              <button className="px-3 py-1 bg-green-600 text-white rounded" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

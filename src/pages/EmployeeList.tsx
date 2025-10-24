import React, { useEffect, useState } from 'react'

export default function EmployeeList() {
  const [employees, setEmployees] = useState<any[]>([])
  const [page, setPage] = useState(1)
  const per = 5

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:4001/basicInfo').then(r=>r.json()),
      fetch('http://localhost:4002/details').then(r=>r.json())
    ]).then(([info, det]) => {
      const merged = info.map((i:any)=>({
        ...i,
        ...det.find((d:any)=>d.email === i.email || d.employeeId === i.employeeId)
      }))
      setEmployees(merged)
    })
  }, [])

  const paged = employees.slice((page-1)*per, page*per)

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl">Employees</h1>
        <a href="/?role=admin" className="px-3 py-1 bg-blue-600 text-white rounded">+ Add Employee</a>
      </div>

      <table className="w-full table-auto border-collapse">
        <thead><tr className="text-left bg-gray-100"><th className="p-2">Name</th><th>Department</th><th>Role</th><th>Location</th><th>Photo</th></tr></thead>
        <tbody>
          {paged.map((e,i)=>(
            <tr key={i} className="border-t">
              <td className="p-2">{e.fullName}</td>
              <td className="p-2">{e.department}</td>
              <td className="p-2">{e.role}</td>
              <td className="p-2">{e.location}</td>
              <td className="p-2">{e.photo ? <img src={e.photo} className="w-10 h-10 object-cover rounded" alt=""/> : '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex justify-center gap-2">
        <button onClick={()=>setPage(p=>Math.max(1,p-1))} className="px-2 py-1 border rounded">Prev</button>
        <div className="px-3 py-1 border rounded">Page {page}</div>
        <button onClick={()=>setPage(p=>p+1)} className="px-2 py-1 border rounded">Next</button>
      </div>
    </div>
  )
}

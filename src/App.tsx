import Wizard from './pages/Wizard'
import EmployeeList from './pages/EmployeeList'

export default function App() {
  const path = location.pathname
  const isEmployeePage = path.startsWith('/employees')
  return (
    <div className="w-full h-screen py-20">
      { isEmployeePage && (<EmployeeList />) }
      { !isEmployeePage && (<Wizard />) }
    </div>
  )
}

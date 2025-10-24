export function generateEmployeeId(deptName: string, seq: number) {
  const code = (deptName || 'EMP').substring(0,3).toUpperCase()
  return `${code}-${String(seq).padStart(3,'0')}`
}

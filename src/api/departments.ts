export async function fetchDepartments(q: string) {
  const url = `http://localhost:4001/departments?name_like=${encodeURIComponent(q)}`
  const res = await fetch(url)
  return res.ok ? res.json() : []
}

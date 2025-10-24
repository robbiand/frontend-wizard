export async function fetchLocations(q: string) {
  const url = `http://localhost:4002/locations?name_like=${encodeURIComponent(q)}`
  const res = await fetch(url)
  return res.ok ? res.json() : []
}

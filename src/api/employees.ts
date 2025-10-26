export async function postBasicInfo(data: object) {
  await new Promise(r => setTimeout(r, 3000))
  return fetch('http://localhost:4001/basicInfo', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
}

export async function postDetails(data: object) {
  await new Promise(r => setTimeout(r, 3000))
  return fetch('http://localhost:4002/details', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
}

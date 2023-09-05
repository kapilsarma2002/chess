const createURL = (path) => {
  return window.location.origin + path
}

export const createNewRoom = async () => {
  const res = await fetch(
    new Request(createURL('/api/room'), {
      method: 'POST',
    })
  )

  if (res.ok) {
    const data = await res.json()
    return data.data
  }
}

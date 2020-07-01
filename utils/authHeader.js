export default function authHeader () {
  const token = JSON.parse(localStorage.getItem(process.env.token_key.access))

  if (token) {
    return `Bearer ${token}`
  } else {
    return null
  }
}

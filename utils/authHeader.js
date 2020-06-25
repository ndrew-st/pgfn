export default function authHeader (val) {
  let token

  if (!val) {
    token = localStorage.getItem(process.env.token.access)
  } else {
    token = val
  }

  if (token) {
    return `Bearer ${token}`
  } else {
    return null
  }
}

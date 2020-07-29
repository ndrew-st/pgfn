export default function findAncestor (el, cls) {
  while ((el = el && el.parentElement) && !el.classList.contains(cls)) { console.log('el ', el) }
  return el
}

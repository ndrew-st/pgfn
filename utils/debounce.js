export default function debounce (f, ms) {
  let isCooldown = false

  return function () {
    if (isCooldown) { return }

    f.apply(this, arguments)

    isCooldown = true

    // eslint-disable-next-line no-return-assign
    setTimeout(() => isCooldown = false, ms)
  }
}

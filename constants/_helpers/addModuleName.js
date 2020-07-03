export default function (module, object) {
  const obj = {}

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      obj[key] = `${module}/${object[key]}`
    }
  }

  return obj
}

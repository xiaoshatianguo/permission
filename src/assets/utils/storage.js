export default {
  get: (x) => {
    // eslint-disable-next-line no-console
    console.log(x)
    return localStorage.getItem(x)
  },
  set: (x, y) => {
    // eslint-disable-next-line no-console
    console.log(x)
    // eslint-disable-next-line no-console
    console.log(y)
    return localStorage.setItem(x, y)
  },
  remove: (x) => {
    // eslint-disable-next-line no-console
    console.log(x)
    return localStorage.removeItem(x)
  }
}

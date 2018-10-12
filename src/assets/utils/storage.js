export default {
  get: (x) => {
    return JSON.parse(localStorage.getItem(x))
  },
  set: (x, y) => {
    return localStorage.setItem(x, JSON.stringify(y))
  },
  remove: (x) => {
    return localStorage.removeItem(x)
  }
}

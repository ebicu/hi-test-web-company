
export default class LocalStorage {
  static store (key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  static retrieve (key) {
    return JSON.parse(window.localStorage.getItem(key))
  }

  static drop (key) {
    window.localStorage.removeItem(key)
  }

  static purge () {
    window.localStorage.clear()
  }
}

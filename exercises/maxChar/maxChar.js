export function maxChar(str) {
  const map = {}
  for (const char of str) {
    map[char] = (map[char] ?? 0) + 1
  }
  let max = 0, char = null
  for (const key in map) {
    if (Object.hasOwnProperty.call(map, key)) {
      const value = map[key];
      if (value > max) {
        max = value
        char = key
      }
    }
  }
  return char
}

export function reverseString1(str) {
  return str.split('').reverse().join('')
}

export function reverseString2(str) {
  let reverse = ''
  for (const char of str) {
    reverse = char + reverse
  }
  return reverse
}

export function reverseString3(str) {
  return str.split('').reduce((rev, char) => char + rev, '')
}
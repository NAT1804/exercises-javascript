export function printStep(n) {
  for (let i = 0; i < n; i++) {
    let stair = ''
    for (let j = 0; j < n; j++) {
      if (i <= j) {
        stair += '#'
      } else {
        stair += ' '
      }
    }
    console.log(stair)
  }
}

export function printStep2(n, row = 0, stair = '', ans = '') {
  if (n == row) return ans;
  
  if (stair.length === n) {
    ans += (stair + '/n')
    return printStep2(n, row + 1, '', ans)
  }
  
  stair += stair.length <= row ? '#' : ' '
  return printStep2(n, row, stair, ans)

}
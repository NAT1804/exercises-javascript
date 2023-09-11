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

export function printStep2(n) {
  if (n == 0) return;
  
}
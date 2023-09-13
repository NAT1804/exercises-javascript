export function pyramid(n) {
  for (let row = 0; row < n; row++) {
    let level = "";
    for (let col = 0; col < 2 * n - 1; col++) {
      const mid = Math.floor((2 * n - 1) / 2);
      if (mid - row <= column && mid + row >= column) {
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
}

export function pyramid2(n, row = 0, level = '') {
  if (n === row) return

	if (level.length === 2 * n - 1) {
		console.log(level)
		return pyramid2(n, row + 1)
	}
	const mid = Math.floor((2 * n - 1) / 2);
	if (mid - row <= level.length && mid + row >= level.length) {
		level += '#'
	} else {
		level += ' '
	}
	pyramid2(n, row, level)
}

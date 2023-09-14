export function maxtrixSpiral(n) {
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push([])
  }

  let counter = 1
  let startColumn = 0, endColumn = n - 1, startRow = 0, endRow = n - 1
  while (startColumn <= endColumn && startRow <= endRow) {

    // Top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter++
    }
    startRow++

    // Right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter++
    }  
    endColumn--

    // Bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter++
    }
    endRow--

    // Left column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter++
    }
    startColumn++
  }

  return results
}
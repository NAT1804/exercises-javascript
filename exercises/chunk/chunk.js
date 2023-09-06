export function chunk(array, size) {
  const N = array.length,
    ans = [];
  for (let i = 0; i < N; i += size) {
    const arr = array.slice(i, i + size);
    ans.push(arr);
  }
  return ans;
}

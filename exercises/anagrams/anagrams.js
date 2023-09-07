export function anagrams(stringA, stringB) {
  const a = stringA.replace(/[^\w]/g, "").toLowerCase();
  const b = stringB.replace(/[^\w]/g, "").toLowerCase();
  if (a.split("").length !== b.split("").length) return false;
  let mapA = {},
    mapB = {};
  for (const char of a) {
    mapA[char] = mapA[char] + 1 || 1;
  }
  for (const char of b) {
    mapB[char] = mapB[char] + 1 || 1;
  }
  for (const key in mapA) {
    if (
      Object.hasOwnProperty.call(mapA, key) &&
      Object.hasOwnProperty.call(mapA, key) &&
      Object.hasOwnProperty.call(mapA, key) &&
      Object.hasOwnProperty.call(mapB, key)
    ) {
      const elementA = mapA[key];
      const elementB = mapB[key];
      if (elementA !== elementB) {
        return false;
      }
    }
  }
  return true;
}

export function anagrams2(stringA, stringB) {
  return (
    stringA.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("") ===
    stringB.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("")
  );
}

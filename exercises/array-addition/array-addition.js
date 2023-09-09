export function arrayAddition(arr) {
  let target = arr.sort((a, b) => a - b).pop();

  return canReachTarget(arr, target);
}

function canReachTarget(arr, target) {
  if (arr.length === 0) {
    return target === 0;
  }

  let firstElement = arr[0];
  let remainingArr = arr.slice(1);

  return (
    canReachTarget(remainingArr, target - firstElement) ||
    canReachTarget(remainingArr, target)
  );
}

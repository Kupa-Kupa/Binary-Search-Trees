function mergeSort(array = []) {
  if (array.length <= 1) return array;

  const midpoint = Math.ceil(array.length / 2);
  const left = mergeSort(array.slice(0, midpoint));
  const right = mergeSort(array.slice(midpoint));

  return merge(left, right);
}

function merge(left, right) {
  let i = 0;
  let j = 0;
  const arr = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      arr.push(left[i]);
      i++;
    } else {
      arr.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    arr.push(left[i]);
    i++;
  }

  while (j < right.length) {
    arr.push(right[j]);
    j++;
  }

  return arr;
}

export { merge, mergeSort };

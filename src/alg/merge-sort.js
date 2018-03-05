const mergeSort = (arr) => {
  const chunkSize = Math.floor(arr.length / 2);
  if (chunkSize < 1) {
    return arr;
  }

  const left = mergeSort(arr.slice(0, chunkSize));
  const right = mergeSort(arr.slice(chunkSize));

  const arrResult = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arrResult.push(left.shift());
    } else {
      arrResult.push(right.shift());
    }
  }

  return arrResult.concat(left, right);
};

export default mergeSort;

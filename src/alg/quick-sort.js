const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr[0];

  const less = [];
  const more = [];

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] <= pivot) {
      less.push(arr[i]);
    } else {
      more.push(arr[i]);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(more)];
};

/* recursion */
const quickSortR = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr[0];
  const part = arr.slice(1);

  const less = part.filter(item => item <= pivot);
  const more = part.filter(item => item > pivot);

  return [...quickSortR(less), pivot, ...quickSortR(more)];
};

export { quickSort, quickSortR };

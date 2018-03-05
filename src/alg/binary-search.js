const binarySearch = (array, item) => {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const mid = Math.floor((high + low) / 2);
    const guess = array[mid];
    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
};

const binarySearchR = (array, item) => {
  const find = (low, high) => {
    if (low > high) {
      return null;
    }

    const mid = Math.floor((high + low) / 2);
    const guess = array[mid];
    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      return find(low, mid - 1);
    }
    return find(mid + 1, high);
  };

  return find(0, array.length - 1);
};

export { binarySearch, binarySearchR };

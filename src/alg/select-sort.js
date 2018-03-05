const findSmallest = (arr) => {
  let smallest = arr[0];
  let smallestIndex = 0;
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
};

const selectSort = (arr) => {
  const newArr = [];
  const arr2 = arr.slice();
  for (let i = 0; i < arr.length; i += 1) {
    const smallest = findSmallest(arr2);
    newArr.push(arr2.splice(smallest, 1)[0]);
  }
  return newArr;
};

/* Variant */
const selectSortL = (arr) => {
  const array = arr.slice();
  for (let i = 0; i < array.length; i += 1) {
    let min = i;
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i !== min) {
      [array[i], array[min]] = [array[min], array[i]];
    }
  }

  return array;
};

/* recursion */
const findSmallestR = arr =>
  arr.reduce((acc, item, index, array) =>
    (item < array[acc] ? index : acc), 0);

const selectSortR = (arr) => {
  const find = (array, result) => {
    if (array.length === 0) {
      return result;
    }
    const smallestIndex = findSmallestR(array);
    const newResult = result.concat(array[smallestIndex]);
    const newArr = [...array.slice(0, smallestIndex), ...array.slice(smallestIndex + 1)];
    return find(newArr, newResult);
  };

  return find(arr.slice(), []);
};

export { selectSort, selectSortR, selectSortL };

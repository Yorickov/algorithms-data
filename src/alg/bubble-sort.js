export default (arr) => {
  const result = arr.slice();
  let swap = false;

  for (let i = 0; i < result.length - 1; i += 1) {
    for (let j = 0; j <= result.length - i; j += 1) {
      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
        swap = true;
      }
    }
    if (swap === false) {
      return result;
    }
  }
  return result;
};

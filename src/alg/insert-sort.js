export default (arr) => {
  const result = arr.slice();

  for (let i = 1; i < result.length; i += 1) {
    const current = arr[i];
    for (let j = i - 1; j >= 0; j -= 1) {
      if (current < result[j]) {
        [result[j + 1], result[j]] = [result[j], result[j + 1]];
      } else break;
    }
  }
  return result;
};

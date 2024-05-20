function duckDuckGoose(arr, k) {
  let head = 0;
  while (arr.length > 1) {
    head = (head + k - 1) % arr.length;
    arr.splice(head, 1);
  }
  return arr[0];
}

module.exports = duckDuckGoose;

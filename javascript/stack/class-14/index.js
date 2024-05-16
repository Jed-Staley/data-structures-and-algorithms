function duckDuckGoose(arr, k) {
  let head = -1;
  while (arr.length > 1) {
    head += k;
    if (head > (arr.length - 1)) {
      head = head - (arr.length - 1);
    }
    arr.splice(head, 1);
    head--;
  }
  return arr[0];
}

module.exports = duckDuckGoose;

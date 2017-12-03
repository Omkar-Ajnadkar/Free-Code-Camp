function compareNumbers(a, b) {
  return a - b;
}
function getIndexToIns(arr, num){
    arr.sort(compareNumbers);
    arr.push(num);
    arr.sort(compareNumbers);
    return arr.indexOf(num);
}

console.log(getIndexToIns([40, 60], 50));

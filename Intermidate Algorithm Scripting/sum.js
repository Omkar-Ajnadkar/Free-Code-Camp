function sumAll(arr) {
  var minNum = Math.min(arr[0],arr[1]);
  var maxNum = Math.max(arr[0],arr[1]);
  var i = minNum;
  var sum = 0;
  while(i<=maxNum){
  	sum = sum + i;
  	i++;
  }
  return sum;
}

console.log(sumAll([1, 4]));

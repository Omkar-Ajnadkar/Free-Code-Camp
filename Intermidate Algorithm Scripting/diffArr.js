function diffArray(arr1, arr2) {
  var newArr = [];
  var i = 0;
  while(i<arr1.length){
        if(arr2.indexOf(arr1[i]) === -1)
            newArr.push(arr1[i]);
        i++;
  }
  i = 0;
  while(i<arr2.length){
        if(arr1.indexOf(arr2[i]) === -1)
            newArr.push(arr2[i]);
        i++;
  }
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

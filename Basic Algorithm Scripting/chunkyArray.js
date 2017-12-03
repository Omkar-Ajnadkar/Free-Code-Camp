function chunkArrayInGroups(arr,num){
    var i = 0;
    var j = 0;
    var arr1 = [];
    var arr2 = [];
    while(i < arr.length){
        j = 0;
        arr1 = [];
        while(j < num && i< arr.length){
            arr1.push(arr[i]);
            j++;
            i++;
        }
        arr2.push(arr1);
    }
    return arr2;
}
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));

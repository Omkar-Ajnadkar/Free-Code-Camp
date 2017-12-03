function largestOfFour(arr){
    var i = 0;
    var max = 0;
    var j = 0;
    var maxArr = [];
    while(i < arr.length){
        j = 0;
        max = 0;
        while(j < 4){
            if (arr[i][j] > max)
                max = arr[i][j];
            j++;
        }
        maxArr.push(max);
        i++;
    }
    return maxArr;
}
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

function updateInventory(arr1, arr2) {
    arr3= [];
    for(var i=0;i<arr1.length;i++){
        arr3.push(arr1[i][1]);
    }
    for(i=0;i<arr2.length;i++){
        if (arr3.indexOf(arr2[i][1]) === -1)
            arr1.push(arr2[i]);
        else if (arr3.indexOf(arr2[i][1]) !== -1)
            arr1[arr3.indexOf(arr2[i][1])] = [arr2[i][0]+arr1[arr3.indexOf(arr2[i][1])][0],arr2[i][1]];
    }
    arr1.sort(function(a,b){
        if (a[1] < b[1]) return -1;     // If the first item's name is lesser than the second's, we return -1
        if (a[1] > b[1]) return 1;      // In the opposite case, we return 1
        return 0;
    });
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));

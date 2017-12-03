function mutation(arr){
    var secondArr = arr[1].toLowerCase().split("");
    var firstStr = arr[0].toLowerCase();
    var i =0;
    while(i < secondArr.length){
        if(firstStr.indexOf(secondArr[i]) === -1){
            return false;
        }
        i++;
    }
    return true;
}
console.log(mutation(["Alien", "line"]));

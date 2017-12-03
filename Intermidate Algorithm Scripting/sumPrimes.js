function sumPrimes(num) {
    var sum = 0;
    for(var i=3;i<=num;i++){
        var flag = 1
        for(var j=2;j<i;j++){
            if(i%j===0){
                flag = 0;
                break;
            }
        }
        if(flag===1)
            sum = sum + i;
    }
    return sum+2;
}

console.log(sumPrimes(10));

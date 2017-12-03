function smallestCommons(arr) {
    var lowNum = Math.min(arr[0],arr[1]);
    var highNum = Math.max(arr[0],arr[1]);
    var b=1;
    for(i=lowNum;i<=highNum;i++){
        b = (i*b)/gcd(i,b);
    }
    return b;
}

function gcd(x, y) {
    while (y !== 0) {
        var z = x % y;
        x = y;
        y = z;
    }
    return x;
}
console.log(smallestCommons([1,5]));

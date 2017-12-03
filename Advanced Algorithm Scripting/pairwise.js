function pairwise(arr, arg) {
    if (arr.length === 0 || typeof arg !== 'number') { return 0; }
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] + arr[j] === arg && result.indexOf(i) < 0 && result.indexOf(j) < 0) {
                result.push(i, j);
                break;
            }
        };
    };

    return result.reduce(function(a, b) {
        return a + b;
    });
}
pairwise([1,4,2,3,0,5], 7);

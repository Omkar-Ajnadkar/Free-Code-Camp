
function uniteUnique(arr) {
    var args =  Array.from(arguments);
    merged = [].concat.apply([],args);
    test=[];
    console.log(merged);
    return merged.filter(function(value){
        if (test.indexOf(value) === -1){
            test.push(value);
            return true;
        }
        return false;
    });

    return test;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

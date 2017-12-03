function test(value){
    if (value !== Boolean)
        return value;
}

function bouncer(arr){
    return arr.filter(test);
}

console.log(bouncer([7, "ate", "", false, 9]));

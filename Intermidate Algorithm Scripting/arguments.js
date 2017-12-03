function addTogether() {
    // check if argument(s) valid number
    var validateNum = function(num) {
        if (typeof num !== 'number') {
            return undefined;
        } else
            return num;
        }
    ;
    // is there is one argument or two
    if (arguments.length > 1) {
        var a = validateNum(arguments[0]);
        var b = validateNum(arguments[1]);
        if (a === undefined || b === undefined) {
            return undefined;
        } else {
            return a + b;
        }
        // if only one argument, return function that expects one argument and returns sum.
    } else {
        var c = arguments[0];
        // start here
        if (validateNum(c)) {
            return function(arg2) {
                if (c === undefined || validateNum(arg2) === undefined) {
                    return undefined;
                } else {
                    return c + arg2;
                }
            }; // belongs to return function(arg2) {}
        }
    }
}
addTogether(2)(3);

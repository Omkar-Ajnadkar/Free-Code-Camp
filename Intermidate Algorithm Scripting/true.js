function truthCheck(collection, pre) {
    var arr = [];
    for(var i = 0; i < collection.length; i++) {
        if(!collection[i][pre]) {
          arr.push(collection[i]);
        }
    }
    if(arr.length === 0) {
        return true;
    }
    else {
        return false;
    }
}
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

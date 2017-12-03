function repeatStringNumTimes(str,num){
    var str1 = str;
    if (num<=0)
        return "";
    else {
        var i = 0;
        while (i<num-1){
            str = str + str1;
            i++;
        }
        return str;
    }
}
console.log(repeatStringNumTimes("*", 3));

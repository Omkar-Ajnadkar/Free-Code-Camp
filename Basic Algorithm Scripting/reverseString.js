function reverseString(str){
    var arr = str.split("");
    var reverseArr = arr.reverse();
    str = reverseArr.join("");
    //or in single step we can write:
    // var reverseStr = str.split('').reverse().join('');
    return str;
}
console.log(reverseString("hello"));

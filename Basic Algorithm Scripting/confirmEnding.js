function confirmEnding(str,target){
    var end = str.substring(str.length-target.length);
    return end === target;
}
console.log(confirmEnding("Bastian", "n"));

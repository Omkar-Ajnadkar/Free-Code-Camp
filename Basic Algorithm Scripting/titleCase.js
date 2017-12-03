function titleCase(str){
    var i = 0;
    var lowerCaseArr = str.toLowerCase().split(" ");
    while(i<lowerCaseArr.length){
        var word = lowerCaseArr[i].split("");
        word[0] = word[0].toUpperCase();
        lowerCaseArr[i] = word.join("");
        i++;
    }
    return lowerCaseArr.join(" ");
}
console.log(titleCase("I'm a little tea pot"));

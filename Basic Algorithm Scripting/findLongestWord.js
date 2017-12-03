function findLongestWord(str){
    var words = str.split(" ");
    var i = 0;
    var maxLength = 0;
    while(i<words.length){
        if(words[i].length > maxLength)
            maxLength = words[i].length;
        i++;
    }
    return maxLength;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

function myReplace(str,before,after){
    var words = str.split(" ");
    var i = words.indexOf(before);
    charBefore = before.charAt(0);
    charAfter = after.charAt(0);
    if (charBefore == charBefore.toUpperCase()) {
        after = charAfter.toUpperCase() + after.substring(1);
    }
    if (charBefore == charBefore.toLowerCase()){
        after = charAfter.toLowerCase() + after.substring(1);
    }
    words[i] = after;
    str = words.join(" ");
    return str;
}

console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));

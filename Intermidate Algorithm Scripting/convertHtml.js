function convertHTML(str) {
    var letters = str.split("");
    for(var i =0;i<letters.length;i++){
        if(letters[i]==='&')
            letters[i]= "&amp;";
        if(letters[i]==='<')
            letters[i]= "&lt;";
        if(letters[i]==='>')
            letters[i]= "&gt;";
        if(letters[i]==='\"')
            letters[i]= "&quot;";
        if(letters[i]==='\'')
            letters[i]= "&apos;";

    }
    var str = letters.join("");
    return str;
}

console.log(convertHTML('Stuff in "quotation marks"'));

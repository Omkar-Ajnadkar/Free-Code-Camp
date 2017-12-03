function spinalCase(str) {
    var letters = str.split("");
    for(var i=0;i<letters.length;i++){
        if(letters[i]===' ' || letters[i]==='_')
            letters[i] = '-';
        if(letters[i]===letters[i].toUpperCase() && i!==0 && letters[i]!=='-' && letters[i-1]!=='-' && letters[i-1]!=='_')
            letters[i] = '-' + letters[i].toLowerCase();
        else
            letters[i] = letters[i].toLowerCase();
    }
    str = letters.join("")
    return str;
}

console.log(spinalCase("The_Andy_Griffith_Show"));

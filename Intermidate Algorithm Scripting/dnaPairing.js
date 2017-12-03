function pairElement(str){
    var letters = str.split("");
    var result = [];
    var i = 0;
    while (i < letters.length){
        if (letters[i] === 'C')
            result.push(["C","G"]);
        if (letters[i] === 'G')
            result.push(["G","C"]);
        if (letters[i] === 'A')
            result.push(["A","T"]);
        if (letters[i] === 'T')
            result.push(["T","A"]);
        i++;
    }
    return result;
}
console.log(pairElement("GCG"));

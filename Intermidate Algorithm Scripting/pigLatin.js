function translatePigLatin(str){
    charFirst = str.charAt(0);
    if (charFirst === 'a' || charFirst === 'e' || charFirst === 'i' || charFirst === 'o' || charFirst === 'u'){
        str = str + "way";
    }
    else{
        var letters = str.split("");
        var vowels = ['a','e','i','o','u'];
        var vowelsPresent = [];
        for(var i =0;i<5;i++){
            if (letters.indexOf(vowels[i]) > -1)
                vowelsPresent.push(letters.indexOf(vowels[i]));
        }
        var least = Math.min.apply(null, vowelsPresent)
        var part1 = str.substring(0,least);
        var part2 = str.substring(least);
        str = part2 + part1 + "ay";
    }
    return str;
}
console.log(translatePigLatin("california"));

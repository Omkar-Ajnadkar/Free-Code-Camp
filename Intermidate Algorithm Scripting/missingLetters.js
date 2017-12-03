function fearNotLetter(str){
    var str1;
    var letters = str.split("");
    var beg = str.charCodeAt(0);
    var end = str.charCodeAt(str.length -1);
    var char = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for(var i = 0 ;i <= str.length -1; i++)
    {
        if (str.charCodeAt(i) !== beg){
            str1 = String.fromCharCode(beg);
            break;
        }
        beg++;
    }
    return str1;
}
console.log(fearNotLetter("abce"));

function truncateString(str,num){
    if (num<=3)
        str = str.substring(0,num) +"...";
    else if (str.length <= num)
        str = str;
    else
        str = str.substring(0,num-3) +"...";
    return str;
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));

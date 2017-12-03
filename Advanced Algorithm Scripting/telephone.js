function telephoneCheck(str) {
    //step1:
    //First, let’s make sure that if we get a country code, it’s equal to 1.
    //To achieve this, I’m going to use the ^ symbol, which matches the beginning of a string.
    //Then, we type in 1, since that’s what we actually want at that position.
    //Since the country code is optional, using the ? symbol after it will match  zero or one of the preceding element:
    //var phone = /^1?/;
    //step2:
    //Next, we have the area code, but before it, we may get a space -sometimes-, so let’s use the ? symbol with a preceeding space:
    //var phone = /^1?/;
    //step3:
    //(\d{3}|\(\d{3}\)) just means: three digits in a row or opening parenthesis, three digits and closing parenthesis.
    //var phone = /^1? ?(\d{3}|(\d{3}\))/ ;
    //step4:
    // We will use a range by using the square brackets ([ and ]) for this. The square brackets match any one of the tokens inside, but only one.
    //If we want to match a space, a dash or nothing at all, we need to use the following: [ -]? (remember what the ? symbol did!)
    // var phone = /^1? ?(\d{3}|(\d{3}\))[ -]?/ ;
    //step5:
    //Now for the phone number, we will always get seven digits,
    //but there might be a space or dash between the first three and the last four digits.
    //Since we want these last digits to be the end of the match, we’ll append a dollar sign ($) at the end of the regular expression,
    //it’s the similar to the ^ symbol we placed at the very beginning:
    var phone = /^1? ?(\d{3}|\(\d{3}\))[ -]?\d{3}[ -]?\d{4}$/ ;
    return phone.test(str);
}



console.log(telephoneCheck("555-555-5555"));

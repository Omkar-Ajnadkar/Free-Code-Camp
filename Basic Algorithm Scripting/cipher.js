function rot13(str) { // LBH QVQ VG!

    var deciphered = [];
    for (var i = 0; i < str.length; i++)
    {

        if (str.charCodeAt(i) - 13 < 65)
        {
            if ((str.charCodeAt(i) >= 65) && (str.charCodeAt(i) <= 90))
            {
                deciphered.push(String.fromCharCode(90 + str.charCodeAt(i) - 65 - 12));
            }
            else
            {
                deciphered.push(String.fromCharCode(str.charCodeAt(i)));
            }
        }
        else
        {
            deciphered.push(String.fromCharCode(str.charCodeAt(i) - 13));
        }

    }

    return deciphered.join('');

}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

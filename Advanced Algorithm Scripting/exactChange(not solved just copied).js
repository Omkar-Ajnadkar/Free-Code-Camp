function checkCashRegister(price, cash, cid) {
    cash = cash * 100;
    price = price * 100;

    var change = cash - price,
        changeLeft = change;

    var totalCid = getTotalCid(cid);
    var result =[];

    if (change > totalCid) {
        return 'Insufficient Funds';
    } else if (change === totalCid) {
        return 'Closed';
    }

    for (var i = cid.length - 1; i >= 0; i--) {
        var coinName = cid[i][0],
            coinTotal = cid[i][1] * 100,
            coinValue = getValue(coinName),
            coinAmount = coinTotal / coinValue,
            toReturn = 0;

        while (changeLeft >= coinValue && coinAmount > 0) {
            changeLeft -= coinValue;
            coinAmount--;
            toReturn++;
            console.log(changeLeft);
        }


        if (toReturn > 0) {
            result.push([coinName, toReturn * (coinValue / 100)]);
        }
    }

    // We make use of the getTotalCid method that we created earlier to see how much money we are actually returning.
    // If it's not equal to the original change, it means that we can't return that exact amount with the current cash-in-register.
    if (getTotalCid(result) != change) {
        return 'Insufficient Funds';            // Return early.
    }

    return result;  // Everything went OK, we return the result!


    function getTotalCid(cid) {
        var total = 0;
        for (var i = 0; i < cid.length; i++) {
            total += cid[i][1] * 100;
        }
        return total;
    }

    function getValue(coinOrBill) {
        switch (coinOrBill) {
            case 'PENNY':
                return 1;
            case 'NICKEL':
                return 5;
            case 'DIME':
                return 10;
            case 'QUARTER':
                return 25;
            case 'ONE':
                return 100;
            case 'FIVE':
                return 500;
            case 'TEN':
                return 1000;
            case 'TWENTY':
                return 2000;
            case 'ONE HUNDRED':
                return 10000;
        }
    }
}
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

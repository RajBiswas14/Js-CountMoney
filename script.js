var penny = 0;
var nickel = 0;
var dime = 0;
var quarter = 0;
var halfDollar = 0;
var dollarCoin = 0;


function calculatePennies(){
    var dollar = penny * 0.01;

    document.getElementById('totalValueOfPennies').textContent = '$' + dollar.toFixed(2);
}


function totalValue(){
    var dollarTotal = 
    penny * 0.01 + 
    nickel * 0.05 + 
    dime * 0.10 +
    quarter * 0.25 +
    halfDollar * 0.50 +
    dollarCoin * 1.00;

    document.getElementById('totalValueOfAllCoins').textContent = '$' + dollarTotal.toFixed(2);
}


function addPennies(){
    penny++;
    var result = penny;

    document.getElementById('numberOfPennies').textContent = result;
    calculatePennies();
    totalValue();
}


function subtractPennies(){
    if ( penny > 0) {
        penny--;
        var result = penny;
    
        document.getElementById('numberOfPennies').textContent = result;
        calculatePennies();
        totalValue();
    }
}


function calculateNickels(){
    var dollar = nickel * 0.05;

    document.getElementById('totalValueOfNickels').textContent = '$' + dollar.toFixed(2);
}


function addNickels(){
    nickel++;
    var result = nickel;

    document.getElementById('numberOfNickels').textContent = result;
    calculateNickels();
    totalValue();
}


function subtractNickels(){
    if (nickel > 0) {
        nickel--;
        var result = nickel;
    
        document.getElementById('numberOfNickels').textContent = result;
        calculateNickels();
        totalValue(); 
    }
}


function calculateDimes(){
    var dollar = dime * 0.10;
    document.getElementById('totalValueOfDimes').textContent = '$' + dollar.toFixed(2);
}


function addDimes(){
    dime++;
    var result = dime;

    document.getElementById('numberOfDimes').textContent = result;
    calculateDimes();
    totalValue();
}


function subtractDimes(){
    if (dime > 0) {
        dime--;
        var result = dime;
    
        document.getElementById('numberOfDimes').textContent = result;
        calculateDimes();
        totalValue(); 
    }
}


function calculateQuarters(){
    var dollar = quarter * 0.25;

    document.getElementById('totalValueOfQuarters').textContent = '$' + dollar.toFixed(2);
}


function addQuarters(){
    quarter++;
    var result = quarter;

    document.getElementById('numberOfQuarters').textContent = result;
    calculateQuarters();
    totalValue();
}




function subtractQuarters(){
    if (quarter > 0) {
        quarter--;
        var result = quarter;
    
        document.getElementById('numberOfQuarters').textContent = result;
        calculateQuarters();
        totalValue();
    }  
}


function calculateHalfDollars(){
    var dollar = halfDollar * 0.50;

    document.getElementById('totalValueOfHalfDollars').textContent = '$' + dollar.toFixed(2);
}


function addHalfDollars(){
    halfDollar++;
    var result = halfDollar;

    document.getElementById('numberOfHalfDollars').textContent = result;
    calculateHalfDollars();
    totalValue();
}


function subtractHalfDollars(){
    if (halfDollar > 0) {
        halfDollar--;
        var result = halfDollar;
    
        document.getElementById('numberOfHalfDollars').textContent = result;
        calculateHalfDollars();
        totalValue();
    }
}


function calculateDollarCoins(){
    var dollar = dollarCoin * 1.00;

    document.getElementById('totalValueOfDollarCoins').textContent = '$' + dollar.toFixed(2);
}


function addDollarCoins(){
    dollarCoin++;
    var result = dollarCoin;

    document.getElementById('numberOfDollarCoins').textContent = result;
    calculateDollarCoins();
    totalValue();
}


function subtractDollarCoins(){
    if (dollarCoin > 0) {
        dollarCoin--;
        var result = dollarCoin;
    
        document.getElementById('numberOfDollarCoins').textContent = result;
        calculateDollarCoins();
        totalValue();
    }
}

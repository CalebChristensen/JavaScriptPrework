//1        //2
function hello() {
    //3
    console.log("Hello World!");
}
hello();
function LionsWon(){
    console.log("Lions won!");
}
LionsWon();LionsWon();LionsWon();LionsWon();LionsWon();

function numberEntered(x){
    console.log("The number you entered was: ", x);
}

function addAnyTwoNumbers(x, y){
    console.log(x + y);
}

addAnyTwoNumbers(4, 5);
addAnyTwoNumbers(6, 11);
addAnyTwoNumbers(7, 8);

//Declare it
function subtractTwoNumbers(firstNum, secondNum){
    console.log(secondNum - firstNum);
}

//Call it
subtractTwoNumbers(5, 7);

function getMyTaxReturnAndDoMyTaxesAndStuff(a, x, y, z){
    let myInc = a * x;
    let myTaxes = myInc - y;
    let total = myTaxes + z;
    return total; 
}
getMyTaxReturnAndDoMyTaxesAndStuff(10000, 5, 50000, 0);

function add(x, y){
    let sum = x + y;
    console.log(sum);
    return sum;
}

add(1, 1);

function fullName(first, last){
    var wholeName = first + " " + last;
    console.log(wholeName);
    return wholeName;
}

fullName("Paul", "O'Connor");

function petNameAndBreed(name, breed){
    var petDetails = name + ", " + breed;
    console.log(petDetails);
    return petDetails;
}
petNameAndBreed("Sansa", "Generic");

function calculatePriceIndiana(quantity, price){
    var tax = 0.07;
    var totalTax = quantity * price * tax;
    var totalPrice = totalTax + quantity * price;
    console.log(totalPrice);
    return totalPrice;
}

calculatePriceIndiana(17, 5);
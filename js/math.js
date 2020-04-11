/*eslint-env browser*/

//STEP 1
function positiveNumber() {
    let number = window.prompt("Enter a positive or negative number");
    console.log(Math.abs(number));
}

//STEP 2
function roundUP() {
    let floater = window.prompt("Enter a number as a decimal");
    console.log(Math.ceil(floater));

}

//STEP 3
function roundDown() {
    let floater = window.prompt("Enter a number as a decimal");
    console.log(Math.floor(floater));

}

//STEP 4
function findLargest() {
    let numList = window.prompt("Enter five integers seperated by commas. (example 1,2,3,4,5)");
    console.log(Math.max(...numList.split(',')));

}

//STEP 5

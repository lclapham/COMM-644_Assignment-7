/*eslint-env browser*/

//STEP 1
let userStr = window.prompt("Enter a string", "gfedcba");
userStr = userStr.toLowerCase();
let arr = userStr.split('');
let sorted = (arr.sort());
console.log("Step 1")
console.log(sorted.toString().replace(/,/g, ""));

//STEP 2
let userInputStr = window.prompt("Enter a string", "The quick brown fox jumped over the lazy dog.");

function capFirstLetter(userInputStr) {
    let arra = userInputStr.toLowerCase().split(' ');
    
    for (let i = 0; i < arr.length; i++) {
        arra[i] = arra[i].charAt(0).toUpperCase() + arra[i].substring(1);
    }

    return arra.join(' ');
}
console.log("Step 2");
console.log(capFirstLetter(userInputStr));

//STEP 3

let inputStr = window.prompt("Enter a string", "The quick brown fox jumped over the lazy dog.");
let vowels = 'aeiouyAEIOUY'
let vnum = 0;

for (let i = 0; i < inputStr.length; i++) {
    if (vowels.indexOf(inputStr[i]) !== -1) {
        vnum += 1;
    }
}
console.log("Step 3");
console.log(vnum);




//STEP 4

let uLength = Number(window.prompt("Enter the length of the random string ID"));

function makeRandomStr(uLength) {
    let text = "";
    let char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < uLength; i++) {
        text += char_list.charAt(Math.floor(Math.random() * char_list.length));
    }
    return text;
}

console.log("Step 4");
console.log(makeRandomStr(uLength));


//STEP 5






////////////////////////////////////////////////////////

// Code that was not use.  Sorta works, but not perfect
// Can't control the length of the output. 
// let randomStr = Math.random() * 10;
// window.alert("Generate Random Number String")
// let userLength = 3;

// function createRandomString(charNum) {
//     randomStr = Math.random();
//     return randomStr.toString(36).slice(charNum);
// }
// console.log("Step 3");
// console.log(createRandomString(userLength));
/*eslint-env browser*/

//STEP 1
// function nameLength() {
//     let name = window.prompt("Please input your name");
//     window.alert("There are " +name.length+ " letters in your name.")

// }

//STEP 2

function findLetter() {
    let name = window.prompt("Please input your name");
    let number = window.prompt("Enter a number between 1 and " + name.length);
    window.alert(number + " letter(s) into your name is " + name[number - 1]);

}

//STEP 3

function conCatDis() {
    let fName = window.prompt("Enter your first name.");
    let lName = window.prompt("Enter your last name.");
    window.alert("Your name is: " + fName + " " + lName);
}

//STEP 4
function findFox() {
    let str = "The quick brown fox jumps over the lazy dog"
    window.alert("The starting index of fox is " + str.indexOf('fox'));

}

//STEP 5
function lastFox() {
    let str = "The quick brown fox jumps over the lazy fox"
    window.alert("The starting lastIndex of fox is " + str.lastIndexOf('fox'));

}

//STEP 6
function replaceDog() {
    let str = "The quick brown fox jumps over the lazy dog"
    let uName = window.prompt("Please input your name");
    let endSlice = str.lastIndexOf('the')
    window.alert(str.slice(0, endSlice) + uName);

}

//STEP 7
function findWord() {
    let str = "The quick brown fox jumps over the lazy fox";
    let uWord = window.prompt("Enter a word from the saying. " + str);
    window.alert(uWord + " is located at index " + str.search(uWord));

}

//STEP 8
function replaceStrings() {
    let str = "The quick brown fox jumps over the lazy fox";
    console.log(str.substr(-12));


}


//STEP 9
function goLower() {
    let upperStr = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG            ";
    window.alert(upperStr.toLowerCase());

}

//STEP 10

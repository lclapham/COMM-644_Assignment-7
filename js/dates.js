/*eslint-env browser*/

// Gobal Variable
const d = new Date();

//STEP 1
let year = window.prompt("Enter the year (i.e. 2020", 2049);
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let days;

console.log("Step 1");
for (let i = 0; i < 12; i++) {
    days = new Date(year, [i + 1], 0).getDate();
    console.log("In the year " + year + " There are " + days + " days in " + months[i])

}

//STEP 2
let userDate = window.prompt("Enter a date (January 3, 2021)", d);
let d1 = new Date(userDate);
console.log("Step 2");
console.log(d1.toLocaleString('default', { month: 'long' }));

//STEP 3
userDate = window.prompt("Enter a date (April 11, 2020)", d);
let date = new Date(userDate);
console.log("Step 3");
switch (date.getDay()) {
    case 0:
        day = "Sunday";
        console.log("Today is " + day + " it's a weekend!")
        break;
    case 1:
        day = "Monday";
        console.log("Its a weekday!");
        break;
    case 2:
        day = "Tuesday";
        console.log("Its a weekday!");
        break;
    case 3:
        day = "Wednesday";
        console.log("Its a weekday!");
        break;
    case 4:
        day = "Thursday";
        console.log("Its a weekday!");
        break;
    case 5:
        day = "Friday";
        console.log("Its a weekday!");
        break;
    case 6:
        day = "Saturday";
        console.log("Today is " + day + " it's a weekend!")
        break;
}

//STEP 4
userDate = window.prompt("Enter a date (April 11, 2020)", d);
let convertDate = (new Date(userDate).getDay() - 1);
let dayArr = ['Sunday','Monday','Tuesday','Wednesday', 'Thursday','Friday', 'Saturday']
console.log("Step 4");
console.log("Yesterday was " + dayArr[convertDate]);


//STEP 5
userDate = window.prompt("Enter a date (January 13, 2021)", d);
let d2 = new Date(userDate);
console.log("Step 5");
console.log(d2.toLocaleString('default', { weekday: 'narrow' }));
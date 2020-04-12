/*eslint-env browser*/

// Gobal Variable
const d = new Date();

//STEP 1
// let year =  window.prompt("Enter the year (i.e. 2020");
// let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// let days;

// for(let i = 0; i < 12; i++){
//     days = new Date(year, [i + 1], 0).getDate();
//     console.log("In the year " + year + " There are "+ days + " days in " + months[i])

// }

//STEP 2
// let userDate = window.prompt("Enter a date (January 3, 2021)", "January 3, 2021");
// let d1 = new Date(userDate);
// console.log(d1.toLocaleString('default', { month: 'long' }));

//STEP 3
let userDate = window.prompt("Enter a date (April 11, 2020)", "April 11, 2020");
let date = new Date(userDate);

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

//STEP 5

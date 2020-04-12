/*eslint-env browser*/

//STEP 1
let year =  window.prompt("Enter the year (i.e. 2020");
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let days;

for(let i = 0; i < 12; i++){
    days = new Date(year, [i + 1], 0).getDate();
    console.log("In the year " + year + " There are "+ days + " days in " + months[i])

}

//STEP 2

//STEP 3

//STEP 4

//STEP 5

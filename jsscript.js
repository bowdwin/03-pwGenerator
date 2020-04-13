
//variables to grab elements to use to see if checked
var numericCheckboxid = document.getElementById("numericCheckbox");
var speciaCharCheckboxid = document.getElementById("speciaCharCheckbox");
var uppercaseCheckboxid = document.getElementById("uppercaseCheckbox");
var lowercaseCheckboxid = document.getElementById("lowercaseCheckbox");

var numberOfCharForPW = 15;

//variables to check if the boxes are checked and store results
var upperCheckboxidChecked = numericCheckbox.checked;
var speciaCharCheckboxidChecked = speciaCharCheckboxid.checked;
var uppercaseCheckboxidChecked = uppercaseCheckboxid.checked;
var lowercaseCheckboxidChecked = lowercaseCheckboxid.checked;


//console log to check if true or false
console.log(upperCheckboxidChecked);
console.log(speciaCharCheckboxidChecked);
console.log(uppercaseCheckboxidChecked);
console.log(lowercaseCheckboxidChecked);

function getNumeric(checkifChecked) {
    if (checkifChecked === true) {
        console.log("Numeric True");
        return Math.floor((Math.random() * 10) + 1);
    }
    else {
        return false;
    }
}

function specialCharfunc(checkifChecked) {
    var specChar = ["!", "@", "#", "$", "%", "^", "*", "(", ")"];

    if (checkifChecked === false) {
        console.log("Special Char True");
        return specChar[Math.floor(Math.random() * specChar.length)];
    }
    else {
        return false;
    }
}

function uppercase(checkifChecked) {
    if (checkifChecked === false) {
        console.log("uppercase True");
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    else {
        return false;
    }
}

function lowercase(checkifChecked) {
    if (checkifChecked === true) {
        console.log("Lowercase True");
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    else {
        return false;
    }
}


function generatepw(a, b, c, d, ) {

    var listOfItems = [a, b, c, d];
    var listToRandomize = [];
    var finalPw = "";


    for (var i = 0; i < listOfItems.length; i++) {
        if (listOfItems[i] === false) {
            //do nothing
            console.log(listOfItems[i]);
        }
        else {
            //add to list
            var listToRandomize = listToRandomize.concat(listOfItems[i]);
            console.log(listToRandomize);
        }
    }
    finalPw = finalPw.concat(listToRandomize[Math.floor(Math.random() * listToRandomize.length)]);
    console.log(finalPw + " this is final pw");
    // return (listToRandomize[Math.floor(Math.random() * listToRandomize.length)])
    return finalPw;
}


// console.log(getNumeric(upperCheckboxidChecked));
// console.log(specialCharfunc(speciaCharCheckboxidChecked));
// console.log(uppercase(uppercaseCheckboxidChecked));
// console.log(lowercase(lowercaseCheckboxidChecked));

var numericResults = (getNumeric(upperCheckboxidChecked));
var specialCharResults = (specialCharfunc(speciaCharCheckboxidChecked));
var uppercaseResults = (uppercase(uppercaseCheckboxidChecked));
var lowercaseResuts = (lowercase(lowercaseCheckboxidChecked));

console.log(numericResults);
console.log(specialCharResults);
console.log(uppercaseResults);
console.log(lowercaseResuts);

console.log(generatepw(numericResults, specialCharResults, uppercaseResults, lowercaseResuts));


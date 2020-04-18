
//variables to grab elements to use to see if checked
var numericCheckboxid = document.getElementById("numericCheckbox");
var speciaCharCheckboxid = document.getElementById("speciaCharCheckbox");
var uppercaseCheckboxid = document.getElementById("uppercaseCheckbox");
var lowercaseCheckboxid = document.getElementById("lowercaseCheckbox");
var passwordGeneratedFinalElement = document.querySelector("#totalPower");

// function checks Numeric power is checked, if true then generate a random, if false, return booleon false
function getNumeric(checkifChecked) {
    if (checkifChecked === true) {
        // console.log("Numeric True");
        return Math.floor((Math.random() * 10) + 1);
    }
    else {
        return false;
    }
}
// function checks special characters power is checked, if true then generate a random, if false, return booleon false
function specialCharfunc(checkifChecked) {
    var specChar = ["!", "@", "#", "$", "%", "^", "*", "(", ")"];

    if (checkifChecked === true) {
        // console.log("Special Char True");
        return specChar[Math.floor(Math.random() * specChar.length)];
    }
    else {
        return false;
    }
}
// function checks uppercase power is checked, if true then generate a random, if false, return booleon false
function uppercase(checkifChecked) {
    if (checkifChecked === true) {
        // console.log("uppercase True");
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    else {
        return false;
    }
}

// function checks lowercase power is checked, if true then generate a random, if false, return booleon false
function lowercase(checkifChecked) {
    if (checkifChecked === true) {
        // console.log("Lowercase True");
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    else {
        return false;
    }
}

// takes 4 functions above to check for upper, lower, spec, and numeric
function generatepw(a, b, c, d, ) {
    var listOfItems = [a, b, c, d];
    var listToRandomize = [];
    var finalPw = "";
    // checks to see if any of them retured false as in no check mark, if true do nothing, if true, add it to a new array
    for (var i = 0; i < listOfItems.length; i++) {
        if (listOfItems[i] === false) {
            //do nothing
        }
        else {
            var listToRandomize = listToRandomize.concat(listOfItems[i]);
        }
    }
    //select an item of the new array to add to the final password
    finalPw = finalPw.concat(listToRandomize[Math.floor(Math.random() * listToRandomize.length)]);
    return finalPw;
}

//grabs number of characters to use for pw from user input
function clickGenerate() {
    var inputVal = document.getElementById("pwlength").value;

    return inputVal;
}

//final function that calls all above functions and inputs total power into box on bottom
function final() {

    var numericCheckboxidChecked = numericCheckboxid.checked;
    var speciaCharCheckboxidChecked = speciaCharCheckboxid.checked;
    var uppercaseCheckboxidChecked = uppercaseCheckboxid.checked;
    var lowercaseCheckboxidChecked = lowercaseCheckboxid.checked;
    var storeNumofChar = clickGenerate();
    var combinedPass = "";
    var startsWithUndefined = "";

    console.log(numericCheckboxidChecked);

    if (storeNumofChar > 7 && storeNumofChar < 129) {

        for (i = 0; i < storeNumofChar; i++) {
            var numericResults = (getNumeric(numericCheckboxidChecked));
            var specialCharResults = (specialCharfunc(speciaCharCheckboxidChecked));
            var uppercaseResults = (uppercase(uppercaseCheckboxidChecked));
            var lowercaseResuts = (lowercase(lowercaseCheckboxidChecked));

            combinedPass += generatepw(numericResults, specialCharResults, uppercaseResults, lowercaseResuts);
            console.log(combinedPass + "this is first pass");
            startsWithUndefined = combinedPass.startsWith("undefined");
        }
        //checks to see if the user has selected at least one power up
        if (startsWithUndefined === true) {
            alert("you won't have enough power to KICK ASS, Please select at least ONE POWER UP!")
            console.log(combinedPass + "this is in iff");
        }
        else {
            document.getElementById("totalPower").value = combinedPass
        }
    }
    else if (storeNumofChar > 127) {
        alert("You have selected too much Strength and might explode on impact, please select 8-128");
    }
    else {
        alert("You have selected too little strength to KICK ASS, please select 8-128");
    }
}
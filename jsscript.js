

function getNumeric() {
    return Math.floor((Math.random() * 10) + 1);
}

function specialCharfunc() {
    var specChar = ["!", "@", "#", "$", "%", "^", "*", "(", ")"];
    return specChar[Math.floor(Math.random() * specChar.length)];

}
function uppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 129);
}
function lowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    console.log(lowercase)
}

function generatePw {
    return
}

console.log(specialCharfunc());
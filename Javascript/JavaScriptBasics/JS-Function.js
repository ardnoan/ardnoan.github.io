function writeText(str) {
    document.getElementById("function").innerHTML = str;
    //calling funtions
    writeText("Hello world!");
}

function addNumbers(num1, num2) {
    num1 = 5;
    num2 = 4;
    var sum = num1 + num2;
    document.getElementById("function1").innerHTML = sum;
}

function addNumbers1(num3, num4) {
    var mus = num3 + num4;
    document.getElementById("function2").innerHTML = mus;
}

function showDialog() {
    alert("Assalamualaikum brother");
}

function addNumbers2(sum5, sum6) {
    var mus1 = sum5 + sum6;
    return mus1;
}
function addNumbers2_() {
    //the function caller 
    document.getElementById("function3").innerHTML = addNumbers2(2, 5);
}

function addNumbers2_1(sum7, sum8) {
    var mus2 = sum7 + sum8;
    return mus2;
}
function addNumbers2_1_() {
    // the function caller 
    document.getElementById("function5").innerHTML = addNumbers2_1(2, 5);
}

function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
function getFullName_() {
    var fullName = getFullName("Ardi", "Nurohman");
    document.getElementById("namaaing").innerHTML = fullName;
}


function getAge(age) {
    var fullName = "Ardi Nurohman";
    //the fullName variabel can be used here
    document.getElementById("function6").innerHTML =
    fullName + " is " + age + " Years old."
}
function getAge_() {
    //the fullName variable cannot be used here
    document.getElementById("function6_1").innerHTML = fullName;
}

var apel = "apple";

function apelsaya() {
    document.getElementById("apel").innerHTML = apel;
}

function toMiles(kilometer) {
    var miles = kilometer * 0.62137;
    return kilometer + "kilometer/s " + "equals " + miles + " miles.";
}

//we can use the function as many times as we want
function miles() {
    alert(toMiles(5));
    document.getElementById("function8").innerHTML = toMiles(3);
}
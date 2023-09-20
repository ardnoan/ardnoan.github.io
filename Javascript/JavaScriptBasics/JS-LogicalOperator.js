function and() {
    document.getElementById("logic").innerHTML = 
    (true && true) /* true */ + "<br>" +
    (true && false) /* false */ + "<br>" +
    (3 == 3 && 4 == 4) /* true */ + "<br>" +
    (3 == 4 && 4 == 4) /* false */ + "<br>" +
    (5 > 3 && 4 < 6) /* true */ + "<br>" +
    (3 > 5 && 4 < 6); /* false */
}
function or() {
    document.getElementById("logic1").innerHTML = 
    (true || true) /* true */ + "<br>" +
    (true || false) /* true */ + "<br>" +
    (false || false) /* false */ + "<br>" +
    (2 == 2 || 2 == 3) /* true */ + "<br>" +
    (1 == 2 || 2 == 3) /* false */ + "<br>" +
    (10 > 5 || 5 > 10) /* true */ + "<br>" +
    (10 < 5 || 5 > 10); /* false */
}
function not() {
    document.getElementById("logic2").innerHTML = 
    !(true) /* false */ + "<br>" +
    !(false) /* true */ + "<br>" +
    !(1 == 1) /* false */ + "<br>" +
    !(1 == 2); /* true */ 
}
function syarat() {
    if(3 == 3 && 4 == 4) {
        document.write("The condition is true");
    }
    if(3 == 4 && 4 == 4) {
        document.write(" I will not be printed because the condition is false.")
    }
}

function ternary() {
    var testScore = 80;
    var testResult = (testScore > 75) ? "Passed" : "Failed";
    document.getElementById("logic3").innerHTML = testResult;
}
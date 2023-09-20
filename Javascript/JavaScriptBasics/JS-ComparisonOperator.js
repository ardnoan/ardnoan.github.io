function comparison() {
    document.getElementById("muncul").innerHTML = 
    (2 == 2) /* returns true */ + "<br>" +
    (2 == 4) /* returns false */ + "<br>" + 
    ("2" == 2) /* returns true */ + "<br>" +
    ("hello world" == "hello world") /* returns true */ + "<br>" +
    ("hello world" == "hello everyone"); /* return false */
}
function comparison1() {
    document.getElementById("muncul1").innerHTML = 
    (2 != 2) /* returns true */ + "<br>" +
    (2 != 4) /* returns false */ + "<br>" + 
    ("2" != 2) /* returns true */ + "<br>" +
    ("hello world" != "hello world") /* returns true */ + "<br>" +
    ("hello world" != "hello everyone"); /* return false */
}
function comparison2() {
    document.getElementById("muncul2").innerHTML = ("2" === 2);
}
function comparison2_1() {
    document.getElementById("muncul2_1").innerHTML = (2 === 2);
}
function comparison3() {
    document.getElementById("muncul3").innerHTML = ("4" !== 4);
}
function comparison3_1() {
    document.getElementById("muncul3_1").innerHTML = (4 !== 4);
}

function comparison4() {
    document.getElementById("muncul4").innerHTML = 
    (4 > 2) /* return true */ + "<br>" +
    (2 > 4) /* return false */ + "<br>" +
    (2.25 > 2.24) /* return true */ + "<br>" +
    (2.24 > 2.25); /* return false */
}
function comparison5() {
    document.getElementById("muncul5").innerHTML = 
    (4 >= 2) /* return true */ + "<br>" +
    (2 >= 4) /* return false */ + "<br>" +
    (2.25 >= 2.24) /* return true */ + "<br>" +
    (2.24 >= 2.25) /* return false */ + "<br>" +
    (4 >= 4) /* return true */ + "<br>" +
    (2.25 >= 2.25); /* return true */
}
function comparison6() {
    document.getElementById("muncul6").innerHTML = 
    (4 < 2) /* return false */ + "<br>" +
    (2 < 4) /* return true */ + "<br>" +
    (2.25 < 2.24) /* return false */ + "<br>" +
    (2.24 < 2.25); /* return true */
}
function comparison7() {
    document.getElementById("muncul7").innerHTML = 
    (4 <= 2) /* return false */ + "<br>" +
    (2 <= 4) /* return true */ + "<br>" +
    (2.25 <= 2.24) /* return false */ + "<br>" +
    (2.24 <= 2.25) /* return true */ + "<br>" +
    (4 <= 4) /* return true */ + "<br>" +
    (2.25 <= 2.25); /* return true */
}

function comparison8() {
    if(5 === 5) {
        document.write("hello world");
    }
}

function comparison8_1() {
    if(5 === 4) {
        document.write("hello world");
    }
}
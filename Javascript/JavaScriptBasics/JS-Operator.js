function operator() {
    var a = 3;
    var b = 5;
    var ab = a + b;
    document.write(ab);
}
function operatorP() {
    var c = 2;
    var d = 4;
    
    c += d;
    document.write(c);
}

function Opar() {
    var e = 8;
    var f = 2;
    var ef = e + f;
    document.write(ef);
}
function Opar1() {
    var g = 8;
    var h = 2;
    var gh = g - h;
    document.write(gh);
}
function Opar2() {
    var i = 8;
    var j = 2;
    var ij = 8 * 2;
    document.write(ij);
}
function Opar3() {
    var k = 8;
    var l = 2;
    var kl = k / l;
    document.write(kl);
}

function Oping() {
    var firstName = "Ardi";
    var lastName = "Nurohman";
    var fullName = firstName + lastName;
    document.getElementById("str").innerHTML = fullName;
}

function Oping1() {
    var fullName = "Ardi";
    var lastName = "Nurohman";

    fullName += lastName;
    document.getElementById("str1").innerHTML = fullName;
}

function Oping2() {
    var text = "Lorem ipsum ";
    var text1 = "dolor sit amet, ";
    var text2 = "consectetur adipscing elit";
    var ttt = text + text1 + text2;
    document.getElementById("str2").innerHTML = ttt;
}

function Oper() {
    var m = 6;
    var n = 7;
    document.getElementById("per").innerHTML = x == y;
}
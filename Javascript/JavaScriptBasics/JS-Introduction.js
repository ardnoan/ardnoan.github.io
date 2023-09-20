document.getElementById("btn").onclick = function() {
    alert(" Saya sebuah Dialog ")
}

function myFunc() {
    document.getElementById("demo").innerHTML = "Halo Sayang";
}

function myFunc1() {
    document.getElementById("image").src = "kobeni/kobeni1.jpg";
}

function myFunc2() {
    document.getElementById("demo1").style.color = "aqua";
    document.getElementById("demo1").style.fontWeight = "bold";
    document.getElementById("demo1").style.fontSize = "300%";
}

function show() {
    document.getElementById("demo2").style.display = "block";
}
function hide() {
    document.getElementById("demo2").style.display = "none";
}
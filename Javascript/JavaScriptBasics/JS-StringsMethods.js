function methods() {
    var str = "study";
    var strlen = str.length;
    document.getElementById("met").innerHTML = strlen;
}

function methods_() {
    var str = "study";
    var x = str[3];
    document.getElementById("met_").innerHTML = x;
}

function methods_1() {
    var str = "study";
    var x = str[-1];
    document.getElementById("met_1").innerHTML = x;
}

function methods_2() {
    var str = "Where are they, where did they go.";
    var strpos = str.indexOf("they");
    document.getElementById("met_2").innerHTML = strpos;
}

function methods_2_() {
    var str = "Where are they, where did they go.";
    var strpos = str.lastIndexOf("they");
    document.getElementById("met_2_").innerHTML = strpos;
}

function methods_3() {
    var str = "where are they, where did they go.";
    var strpos1 = str.indexOf("study");
    var strpos2 = str.lastIndexOf("study");

    document.getElementById("met_3").innerHTML = strpos1 + "<br>" + strpos2;
}

function methods_4() {
    var str = "Where are they, where did they go.";
    var strpos = str.search("they");
    document.getElementById("met_4").innerHTML = strpos;
}

function methods_5() {
    var str = "hello world";
    var strpos = str.search(/hello/i);
    document.getElementById("met_5").innerHTML = strpos;
}
function methods_5_() {
    var str = "Where are they, where did they go.";
    var strpos = str.search("study");
    document.getElementById("met_5_").innerHTML = strpos;
}

function methods_6() {
    var str = "They quidk brown fox jumps over the lazy dog.";
    var result = str.search(10, 19);
    document.getElementById("met_6").innerHTML = result;
}
function methods_6_() {
    var str = "They quick brown fox jumps over the lazy dog.";
    var result = str.search(-9, -1);
    document.getElementById("met_6_").innerHTML = result;
}

function methods_7() {
    var str = "The quick brown fox jumps over the lazy dog. ";
    var result = str.substring(10, 19);
    document.getElementById("met_7").innerHTML = result;
}

function methods_7_() {
    var str = "The quixk brown fox jumps over the lazy dog.";
    var result = str.substr(10, 9);
    document.getElementById("met_7_").innerHTML = result;
}

function methods_7_1() {
    var str = "The quick brown fox jumps over the lazy dog.";
    var result1 = str.slice(10);
    var result2 = str.substring(10);
    var result3 = str.substr(10);
    document.getElementById("met_7_1").innerHTML = result1 + "<br>" + result2 + "<br>" + result3;
}

function methods_8() {
    var str = "study is nice, I love study";
    var result = str.replace("study", "everyone");
    document.getElementById("met_8").innerHTML = result;
}
function methods_8_() {
    var str = "study is nice, I love study";
    var result = str.replace(/study/g, "everyone");
    document.getElementById("met_8_").innerHTML = result;
}

function methods_8_1() {
    var str = "study is nice, is love study";
    var result = str.replace(/StUdY/i, "everyone");
    document.getElementById("met_8_1").innerHTML = result;
}

function methods_8_2() {
    var str = "study is nice, is love study";
    var result = str.replace(/study/gi, "everyone");
    document.getElementById("met_8_2").innerHTML = result;
}

function methods_9() {
    var str = "     I Love Study     ";
    var result = str.trim();
    alert(result);
}

function methods_10() {
    var str = "I Love study";
    var result = str.toUpperCase();
    document.getElementById("met_10").innerHTML = result;
}

function methods_10_() {
    var str = "I LOVE study";
    var result = str.toLowerCase();
    document.getElementById("met_10_").innerHTML = result;
}

function methods1() {
    var str = "Lorem";
    var result = str.concat(" ", "ipsum");
    document.getElementById("met1").innerHTML = result;
}
function methods1_() {
    var str = "Lorem";
    var result = str.concat(", ", "ipsum");
    document.getElementById("met1_").innerHTML = result;
}
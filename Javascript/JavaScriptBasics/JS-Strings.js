function strings() {
    var string = "hello world";
    document.write(string);
}

function strings_() {
    var string = 'halo bang';
    document.write(strings_);
}

function strings1() {
    var str1 = "We'll win!";
    var str2 = "Her name is 'Ardi'";
    var str3 = 'Her name is "rachel"';

    document.getElementById("kata").innerHTML = str1 + "<br>" + str2 + "<br>" + str3;
}

function strings2() {
    var str1 = "Helo world";
    var str2 = 'Assalamualaikum brother';

    var sentence = str1 + " " + str2;
    document.getElementById("kata1").innerHTML = sentence;
}

function strings2_() {
    var str = "Hello ";
    str += "World";
    document.getElementById("kata1_").innerHTML = str;
}

function strings2_1() {
    var str1 = "Lorem ipsum";
    var str2 = 'dolor sit amet';
    var str3 = ".";
    var sentence = str1 + " " + str2 + " " + str3;
    document.getElementById("kata1_1").innerHTML = sentence;
}

function greetings() {
    var userName = window.prompt("halo bang. Selamat datang, Boleh tulis nama kamu?");
    var str = "bagus aku suka kamu " + userName + "! " + "Selamat datang di study javascript";

    alert(str);
}

function strings3() {
    var str1 = "She is called \"Ardi\"";
    var str2 = 'She is called \'Ardi\'';
    var str3 = "Escaping backslahs \\";
    document.getElementById("kata2").innerHTML = str1 + "<br>" + str2 + "<br>" + str3;
}
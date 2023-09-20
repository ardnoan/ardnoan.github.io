function namaa() {
    var nama = "Ardi"; //dua petik
    var nama_ = 'Tyas'; //satu petik
    document.getElementById("nm").innerHTML = nama +" <br> "+ nama_;
}

function namaa1() {
    var nama1 = "Dia bernama 'Ardi'"; //gunakan tanda kutip ganda ketika string berisi tanda kutip tunggal
    var nama1_ = 'Dia bernama "Tyas"'; //tunakan tanda kutip tunggal ketika string berisi tanda kutip ganda

    document.getElementById("nm1").innerHTML = nama1 +" <br> "+ nama1_;
}

function nomorr() {
    var nomor = 4; //integer
    var nomor1 = 4.5; //a floating point number

    document.getElementById("no").innerHTML = nomor +" <br> "+ nomor1;
}
function nomorr_() {
    var nomor = 4; //integer
    var nomor1 = 4.5; //a floating point number
    var nn1 = nomor + nomor1; //adds the two numbers
    
    document.getElementById("no1").innerHTML = nn1;
}

function nomornama() {
    var noma = 16 + "Ardi"; //return "16Ardi"
    var noma1 = "Tyas" + 15; //return "Tyas15"

    document.getElementById("nonm").innerHTML = noma +" <br> "+ noma1;
}
function nomornama_() {
    var noma2 = 10 + 100 + "Ardi"; //return "110Ardi" 
    var noma3 = "Tyas" + 10 + 11; //return "Tyas1011"
    
    document.getElementById("nonm1").innerHTML = noma2 +" <br> "+ noma3;
}

function funn() {
    var fun = true;
    var fun1 = true;
    document.getElementById("boo").innerHTML = "Coding menyenangkan?" + fun + "<br>" + "Math menyenangkan?" + fun1;
}
function funn_() {
    var x = 3;
    var y = 3;
    var xy = (x == y);

    document.getElementById("boo1").innerHTML = xy;

}

function undifined() {
    var title;

    document.getElementById("un").innerHTML = title;
}


function btnnu() {
    var buah = null;
    document.write(buah);
};

function btnnu1() {
    var buah1 = "banana";
    document.write(buah1 + "<br>");

    buah1 = null;
    document.write(buah1);
};

var fruit = {
    color: "yellow",
    size: "long",
    quantity: 3,
    isSweet: true,
};
function detailsBuah() {
    document.getElementById("demo9").innerHTML = 
    "fruit <br>" + 
    "warna: " + fruit.color + "<br>" +
    "ukuran: " + fruit.size + "<br>" +
    "jumlah: " + fruit.quantity + "<br>" +
    "apakah manis?: " + fruit.isSweet;
}
function array() {
    var buah = ["apple", "Orange", "Bananas"];
    document.getElementById("arr").innerHTML = buah[0] + " " + buah[1] + " " + buah[2];
}

function dinamis() {
    var a = "text"; //a is a string
    a = true; //a is now a boolean
    a = 21; //a is now a number
    document.write(a);
}
function kompleks() {
    document.getElementById("off").innerHTML = 
    typeof {firstName: "Ardi", lastName: "Nurohman", age: 16} + "<br>" + //returns "object"
    typeof ["apple", "orange", "bananas"] + "<br>" + //returns objeck
    typeof null + "<br>" + //return "objek"
    typeof function myFunction(){}; //return "function"
}
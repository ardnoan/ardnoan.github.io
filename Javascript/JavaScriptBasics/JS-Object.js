var person = {
    fullName: "Ardi Nurohman",
    age: 16,
    hobbies: ["coding", "playing chess", "gaming"],
    isMarried: true,
};

var person1 = {
    fullName: "Tyas Abqory",
    age: 16,
    showName: function() {
        alert(this.fullName);
    },
    showName: function() {
        alert(this.age);
    }
};

var person2 = {
    name: "Zulfikar",
    age: 16,
    hobbies: ["badminton", "bola"],
};

document.getElementById("objeck").innerHTML = 
person2.name + "<br>" +
person2.age + "<br>" +
person2.hobbies[0];


var person3 = {
    name: "Deni",
    age: 16,
    hobbies: ["badminton", "chess"]
};
function propil() {
    document.getElementById("objeck1").innerHTML =
    person3["name"] + "<br>" +
    person3["age"] + "<br>" +
    person3["hobbies"][0];
}

var person4 = {
    name: "John Doe",
    age: 30,
    showDetails: function() {
        alert(this.name + " is " + this.age + " Years old.");
    }
}

var fruits = {
    mango: {
        color: "yellow",
        taste: "sweet"
    },
    apple: {
        color: "red",
        taste: "sweet"
    }
}
function mango() {
    document.write(fruits.mango.color + "<br>");
    document.write(fruits["apple"]["color"]);
}
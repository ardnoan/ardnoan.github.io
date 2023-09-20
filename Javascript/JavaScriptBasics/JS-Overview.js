function changeColor(element) {
    var currentColor = element.style.backgroundColor;
    if (currentColor == "red") {
        element.style.backgroundColor = "aqua";
        element.style.color = "black";
    } else {
        element.style.backgroundColor = "red";
        element.style.color = "white";
    }
}
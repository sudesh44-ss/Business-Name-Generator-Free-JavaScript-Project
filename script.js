function getAdjective() {

    let number = Math.floor(Math.random() * 3) + 1;

    if (number == 1) {
        return "Crazy";
    }
    else if (number == 2) {
        return "Amazing";
    }
    else {
        return "Fire";
    }
}


function getShopName() {

    let number = Math.floor(Math.random() * 3) + 1;

    if (number == 1) {
        return "Engine";
    }
    else if (number == 2) {
        return "Foods";
    }
    else {
        return "Garments";
    }
}


function getAnotherWord() {

    let number = Math.floor(Math.random() * 3) + 1;

    if (number == 1) {
        return "Bros";
    }
    else if (number == 2) {
        return "Limited";
    }
    else {
        return "Hub";
    }
}


function generateName() {

    let adjective = getAdjective();
    let shopName = getShopName();
    let anotherWord = getAnotherWord();

    let businessName =
        adjective + " " + shopName + " " + anotherWord;

    document.getElementById("result").innerText = businessName;
}
let myConButton = document.createElement("div");

let button = document.createElement("button");
let removeColour = document.createElement("button");
let retRanColour = document.createElement("button");
let clearAll = document.createElement("button");

document.body.insertBefore(myConButton, document.body.firstElementChild);
myConButton.appendChild(button);
myConButton.classList = "header";
myConButton.style = "margin: 10px auto; text-align: center";
button.innerText = "Creat New Grid";
button.className = "mybutton";

let container = document.createElement("div");
let squ = document.createElement("div");

document.body.insertBefore(container, document.body.children[1]);

container.className = "container";

squ.className = "squ";


// This Function that Named reset Used To Remove All Squares:

function reset() {

    return document.querySelectorAll(".squ").forEach(square => square.remove());
    
};

// This Function that Named createSquares Used To Create All Squares In Container:

button.onclick = function createSquares() {

    reset();

    let inputNum = Math.floor(prompt("How Many Squares You Want In Each Direction?"), 5)

    if (typeof(+inputNum) === "number" && +inputNum > 0 && +inputNum <= 64) {

        myConButton.appendChild(removeColour);
        myConButton.appendChild(retRanColour);
        myConButton.appendChild(clearAll);
        removeColour.innerText = "Clear The Color";
        removeColour.className = "mybutton";
        retRanColour.innerText = "Random Colour";
        retRanColour.className = "mybutton";
        clearAll.innerText = "Clear All";
        clearAll.className = "mybutton";

        squSize = (100 / inputNum) + "%";

        let mysquares = []
        for (let i = 1; i <= inputNum ** 2; i++) {

            mysquares[i] = document.createElement("div");
            mysquares[i].className = "squ";
            container.appendChild(mysquares[i]);
            mysquares[i].style = `width: ${squSize}; height: ${squSize}`;

        }

    } else {

        return alert("Please Insert Just Positive Number And Less than 65")

    }

    KeepColour();

};

// This Function that Named randomColour Used To Create Random Colour For Each Square:

function randomColour() {

    let a = Math.floor((Math.random() * 255) + 1);
    let b = Math.floor((Math.random() * 255) + 1);
    let c = Math.floor((Math.random() * 255) + 1);
    return `rgb(${a}, ${b}, ${c})`;

};

// This Function that Named KeepColour Used To Put Random Colour When Hover On Each Square And Keep The Colour On Square:

function KeepColour() {

    document.querySelectorAll(".squ").forEach(square => {

        square.addEventListener("mouseover", function () {

            square.style.backgroundColor = randomColour();

        });

    });

};

// This Function that Named clear Used To Return The Square To Original Colour:

removeColour.onclick = function clear() {

    document.querySelectorAll(".squ").forEach(square => {

        square.addEventListener("mouseover", function () {

            square.style.backgroundColor = "coral";

        });

    });
    
};

// This Function that Named ranColour Used To give The Square To Random Colour:

retRanColour.onclick = function ranColour() {

    document.querySelectorAll(".squ").forEach(square => {

        square.addEventListener("mouseover", function () {

            square.style.backgroundColor = randomColour();

        });

    });
    
};

// This Function that Named originalColour Used To give All The Square The Original Colour:


clearAll.onclick = function allOriginalColour() {

    document.querySelectorAll(".squ").forEach(square => square.style.backgroundColor = "coral");
    
};
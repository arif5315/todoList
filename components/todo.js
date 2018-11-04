var ul =  document.querySelector("ul");
var button = document.getElementById("button");
var input = document.getElementById("input");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    var liText = document.createTextNode(input.value);
    li.appendChild(liText);
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }  
}

function addListAfterEnter(e) {
    if (inputLength() > 0 && e.which === 13) {
        createListElement();
    }
}

button.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListAfterEnter);
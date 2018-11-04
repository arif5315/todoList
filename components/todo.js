var ul =  document.querySelector("ul");
var enter = document.getElementById("enter");
var input = document.getElementById("input");
var list = document.getElementsByClassName("li");
var del = document.getElementsByClassName("del");
var button;
var j=0;
var n=0;

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("LI");
    var liText = document.createTextNode(input.value);
    li.appendChild(liText);
    list = ul.appendChild(li); 
    list.setAttribute("class","li");
    list.setAttribute("id", j);
    list.setAttribute("onclick","toggleItem(this)");
    j++;

    var btn = document.createElement("BUTTON");
    var btnText = document.createTextNode("DELETE");
    btn.appendChild(btnText);
    button=ul.appendChild(li).appendChild(btn);
    button.setAttribute("class", "del");
    button.setAttribute("id", n);
    button.setAttribute("onclick", "removeItem(this)");
    n++;

    /* console.log(list);
    console.log(ul.children); */

    input.value = "";
}

function removeItem(e) {
    var id = e.target.id;
    console.log(id);
    ul.removeChild(ul.childNodes[id]);
    j=0;
    n=0;
}

function toggleItem(e) {
    var id = e.target.id;
    document.getElementById(id).classList.toggle("done");
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

ul.addEventListener('click', removeItem);

ul.addEventListener('click', toggleItem);

enter.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListAfterEnter);





const form = document.querySelector("form");
const ul = document.querySelector("ul");
const userInput = document.getElementById("input");
const button = document.querySelector("button");

let listItemsArray = localStorage.getItem("items") 
    ? JSON.parse(localStorage.getItem("items")) : []

localStorage.setItem("items", JSON.stringify(listItemsArray));
const listItems = JSON.parse(localStorage.getItem("items"))

const createItem = inputText => {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.className = "btn btn-danger btn-sm";
    deleteBtn.id = "delete";

    const li = document.createElement("li");
    li.textContent = inputText;
    li.appendChild(deleteBtn);
    ul.appendChild(li);
}

form.addEventListener("submit", function(e) {
    listItemsArray.push(userInput.value);
    localStorage.setItem("items", JSON.stringify(listItemsArray));
    createItem(userInput.value);
    userInput.value = "";
});

listItems.forEach((item) =>{
    createItem(item);
});

ul.addEventListener("click", function(ev) {
    if(ev.target.tagName === "LI"){
        ev.target.classList.toggle("checked");
    }
}, false);

clearAll = () => {
    localStorage.clear();
    location.reload();
}

const deleteItem = document.getElementsByClassName("btn btn-danger btn-sm");
for (let i = 0; i < deleteItem.length; i++){
    deleteItem[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
        console.log(listItems);

    }
}


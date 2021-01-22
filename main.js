const key = new Date();
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const userInput = document.getElementById("input");

let listItemsArray = localStorage.getItem("items") 
    ? JSON.parse(localStorage.getItem("items")) : []

localStorage.setItem("items", JSON.stringify(listItemsArray));
const listItems = JSON.parse(localStorage.getItem("items"))

const createItem = inputText => {
    const li = document.createElement("li");
    li.textContent = inputText;
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

var todoTextBox = document.querySelector(".todoText");
var txtBox = document.querySelector(".txtBox");
var todoList = document.querySelector(".todoList");
var editBtn = document.querySelector(".editBtn");
var addBtn = document.querySelector(".addBtn");
var queBtn = document.querySelector(".queBtn");

//add new element in ul
todoTextBox.addEventListener("keypress", function (event) {

    if (event.keyCode === 13 && todoTextBox.value.trim() !== "") {
        var newLi = document.createElement("li");

        //Text line through
        newLi.addEventListener("click", function (event) {
            this.classList.toggle('Textlinethrough');
        })

        var liText = document.createTextNode(todoTextBox.value);
        var removeBtn = document.createElement("button");
        var btnText = document.createTextNode("X");
        removeBtn.setAttribute("class", "removeBtn");

        //remove List Element 
        removeBtn.setAttribute("tabindex", "-1");
        removeBtn.addEventListener("click", function (event) {
            this.parentElement.style.display = "none";
        });

        removeBtn.appendChild(btnText);
        newLi.appendChild(removeBtn);
        newLi.appendChild(liText);
        todoList.appendChild(newLi);
        todoTextBox.value = "";
    }
});

//edit Header text
editBtn.addEventListener("click", function () {
    var heading = window.prompt("Enter To Do List Heading for your reference", document.querySelector("h1").innerText);
    if (heading != "" && heading != null) {
        document.querySelector("h1").innerHTML = heading;
    }
});

//hide/show header textbox
addBtn.addEventListener("click", function () {
    todoTextBox.classList.toggle('hidden');    
});

//Helper Alert
queBtn.addEventListener("click", function () {
    alert("Help for this to do list coming soon!");
});














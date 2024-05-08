let eventi = document.querySelector('input');
let btn = document.querySelector('button');
let list = document.querySelector('ul');


function addTodo() {
    let valueitem = eventi.value.trim();
    if (valueitem === "" || valueitem.length === 0) {
        alert("Todo cannot be empty");
        return;
    }

    let livalue = document.createElement("li");
    livalue.innerText = valueitem;


    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");


    let updateBtn = document.createElement("button");
    updateBtn.innerText = "Update";
    updateBtn.classList.add("update");

    livalue.appendChild(delBtn);
    livalue.appendChild(updateBtn);
    list.append(livalue);
    eventi.value = "";
}


btn.addEventListener("click", addTodo);


list.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
        let listItem = event.target.parentElement;
        listItem.remove();
    } else if (event.target.classList.contains("update")) {
        let listItem = event.target.parentElement;
        let currentText = listItem.firstChild.textContent;


        let updatedText = prompt("Update your todo", currentText);

        if (updatedText && updatedText.trim() !== "") {
            listItem.firstChild.textContent = updatedText.trim();
        }
    }
});

const 
todoValue = document.getElementById("todoText"),
listItems = document.getElementById("list-items"),
addUpdateClick = document.getElementById("AddUpdateClick");

document.getElementById('todoText').addEventListener('keydown',function(event){
    if (event.keyCode === 13){
        event.preventDefault();
        document.getElementById('button').click();
    }
})

function addnew(){
    if (todoValue.value === ""){
        alert("You didn't name a Task.");
        todoValue.focus();
    }
    let li = document.createElement("li");
    const todoItems = `<div> ${todoValue.value}</div>`;
    li.innerHTML=todoItems;
    listItems.appendChild(li);
    todoValue.value = "";
}

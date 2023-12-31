const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");


let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), 
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { 
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { 
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => { 
    icon.addEventListener("click", () => { 
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) { 
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        }
        renderCalendar(); 
    });
});

function defaultmode(){
    document.querySelector("body").className = "Default";
    document.querySelector("body").style.backgroundColor = "#8db691";
}

function lightmode(){
    document.querySelector("body").className = "Light";
    document.querySelector("body").style.backgroundColor = "#c0c1c2";
}

function darkmode(){
    document.querySelector("body").className = "Dark";
    document.querySelector("body").style.backgroundColor = "#3a393a";
}

// To do list //
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


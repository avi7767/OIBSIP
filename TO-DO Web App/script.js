const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addTask = () => {
    if (inputBox.value.trim() === "") {
        alert("You must write something!");
        return; 
    }

    const li = document.createElement("li");
    li.innerHTML = `
        ${inputBox.value}
        <div class="btn-container">
            <button onclick="completeTask(this)">Complete</button>
            <span onclick="deleteTask(this)">&times;</span>
        </div>
    `;

    listContainer.appendChild(li);
    inputBox.value = "";
    saveData();
};

inputBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

const completeTask = (button) => {
    const li = button.parentElement.parentElement;
    li.classList.toggle("checked");
    saveData();
};

const deleteTask = (span) => {
    span.parentElement.parentElement.remove();
    saveData();
};

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
};

const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data") || "";
};

showTask(); 

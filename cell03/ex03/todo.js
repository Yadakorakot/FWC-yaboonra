const ftList = document.getElementById("ft_list");
const newButton = document.getElementById("newTodo");


// ----------------------------
// New Button
// ----------------------------
newButton.addEventListener("click", function () {

    const todoText = prompt("Enter a new TO DO:");

    // ถ้ากด Cancel หรือไม่ได้กรอกอะไร
    if (todoText === null || todoText.trim() === "") {
        return;
    }

    createTodo(todoText.trim());

    saveTodos();
});


// ----------------------------
// Create TO DO
// ----------------------------
function createTodo(text) {

    const todo = document.createElement("div");

    todo.className = "todo-item";

    todo.textContent = text;


    // เมื่อคลิก TO DO
    todo.addEventListener("click", function () {

        const answer = confirm(
            "Do you want to remove this TO DO?"
        );

        if (answer) {

            // ลบออกจาก DOM จริง ๆ
            todo.remove();

            saveTodos();
        }

    });


    // เพิ่ม TO DO ใหม่ไว้บนสุด
    ftList.prepend(todo);
}


// ----------------------------
// Save TO DO to Cookie
// ----------------------------
function saveTodos() {

    const todos = [];

    const todoItems = document.querySelectorAll(".todo-item");

    todoItems.forEach(function (item) {
        todos.push(item.textContent);
    });


    const data = JSON.stringify(todos);


    document.cookie =
        "todos=" +
        encodeURIComponent(data) +
        "; max-age=31536000; path=/";
}


// ----------------------------
// Read Cookie

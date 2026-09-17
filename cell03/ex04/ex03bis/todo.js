// todo.js
$(document).ready(function () {

    $("#newTodo").click(function () {

        const todoText = prompt("Enter a new TO DO:");

        if (todoText === null || todoText.trim() === "") {
            return;
        }

        createTodo(todoText.trim());

        saveTodos();
    });


    function createTodo(text) {

        const todo = $("<div></div>");

        todo.addClass("todo-item");

        todo.text(text);


        todo.click(function () {

            const answer = confirm(
                "Do you want to remove this TO DO?"
            );

            if (answer) {

                todo.remove();

                saveTodos();
            }

        });


        $("#ft_list").prepend(todo);
    }


    function saveTodos() {

        const todos = [];

        $(".todo-item").each(function () {

            todos.push($(this).text());

        });


        const data = JSON.stringify(todos);


        document.cookie =
            "todos=" +
            encodeURIComponent(data) +
            "; max-age=31536000; path=/";
    }


    function getCookie(name) {

        const cookies = document.cookie.split(";");

        for (let cookie of cookies) {

            cookie = cookie.trim();

            if (cookie.startsWith(name + "=")) {

                return cookie.substring(
                    name.length + 1
                );
            }
        }

        return null;
    }


  function loadTodos() {

        const cookie = getCookie("todos");

        if (cookie === null) {
            return;
        }


        try {

            const todos =
                JSON.parse(
                    decodeURIComponent(cookie)
                );


            todos.reverse().forEach(function (text) {

                createTodo(text);

            });

        }
        catch (error) {

            console.log("Cannot load TO DO list");

        }
    }


    loadTodos();

});

var addButton = document.querySelector('.add-button');
var addField = document.querySelector('.add-field');
var completeButton = document.querySelector('.complete-button');
var completeField = document.querySelector('.complete-field');
var clearButton = document.querySelector('.clear-button');
var todoListHtml = document.querySelector('.todo-items');

function getTodoList() {
    var todoString = localStorage.getItem("todoList");
    if (todoString == null) {
        return [];
    } else {
        return JSON.parse(todoString);
    }
}

function addTodoItem(item) {
    var todoList = getTodoList();
    todoList.push({
        item: item,
        completed: false
    });
    localStorage.setItem("todoList", JSON.stringify(todoList));
}

function showTodoList() {
    todoListHtml.innerHTML = null;
    for (var todoItem of getTodoList()) {
        if (todoItem.completed) {
            todoListHtml.innerHTML += "<li><s>" + todoItem.item + "</s></li>"
        } else {
            todoListHtml.innerHTML += "<li>" + todoItem.item + "</li>"
        }

    }
}

function completeTodoItem(index) {
    var todoList = getTodoList();
    todoList[index] = {
        item: todoList[index].item,
        completed: true
    }
    localStorage.setItem("todoList", JSON.stringify(todoList));
}


showTodoList();

addButton.addEventListener('click', function (event) {
    event.preventDefault();
    addTodoItem(addField.value);
    showTodoList();
});

completeButton.addEventListener('click', function (event) {
    event.preventDefault();
    completeTodoItem(parseInt(completeField.value) - 1);
    showTodoList();
});


clearButton.addEventListener('click', function (event) {
    event.preventDefault();
    localStorage.removeItem("todoList");
    showTodoList();
});

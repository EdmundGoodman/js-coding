var addButton = document.querySelector('.add-button');
var removeButton = document.querySelector('.remove-button');
var nameField = document.querySelector('.name-field');

addButton.addEventListener('click', function (event) {
    event.preventDefault();
    localStorage.setItem("name", nameField.value);
});

removeButton.addEventListener('click', function (event) {
    event.preventDefault();
    localStorage.removeItem("name")
});

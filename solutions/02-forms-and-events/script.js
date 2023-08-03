var submitButton = document.querySelector('.submit-button');
var nameField = document.querySelector('.name-field');
submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    alert('Hello ' + nameField.value);
});

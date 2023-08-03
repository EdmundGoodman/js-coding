var container = document.querySelector('.js-container');
var newContent = `
  <div>
    <h2>Hello</h2>
    <p>This will be inserted… like magic</p>
  </div>
`;
container.innerHTML = newContent;
// container.innerHTML = null;
container.innerHTML += `
  <p>This is another paragraph…</p>
`;


// Challenge
container = document.querySelector('.name-container');
var submitButton = document.querySelector('.submit-button');
var nameField = document.querySelector('.name-field');
// submitButton.addEventListener('click', function (event) {
//     event.preventDefault();
//     container.innerHTML = "<p>Hello " + nameField.value + "!</p>";
// });

// Stretch goals
submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    localStorage.setItem("name", nameField.value);
    container.innerHTML = "<p>Hello " + localStorage.getItem("name") + "!</p>";
});

var removeButton = document.querySelector('.remove-button');
removeButton.addEventListener('click', function (event) {
    event.preventDefault();
    localStorage.removeItem("name")
    container.innerHTML = null;
});

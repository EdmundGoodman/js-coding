var colours = [
    'red',
    'yellow',
    'teal',
    'blue',
    'indigo',
    'violet'
];
// array.splice(start_index, delete_count, value_to_add);

// Challenge
console.log(colours);
colours.splice(1, 0, 'orange');
colours.splice(3, 1, 'green'); // 3 not 2, since we added an element!
console.log(colours);

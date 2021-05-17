const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// append random letter/number from hex to hexColor and creates a random color. 
btn.addEventListener('click', function() {
    let hexColor = "#";

    for (let i=0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

// Return the random integer from 0 to the length of hex list
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

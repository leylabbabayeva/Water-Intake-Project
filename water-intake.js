let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count++;
    countEl.textContent = count;

    let image = document.getElementById("water-img");

    if (count < 4) {
        image.src = "low_water.png";  // Image for less than 4 glasses
    } else if (count >= 4 && count <= 6) {
        image.src = "middle_water.png";  // Image for 4-6 glasses
    } else {
        image.src = "high_water.png";  // Image for more than 7 glasses
    }
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    let image = document.getElementById("water-img");
    image.src = "low_water.png";
}
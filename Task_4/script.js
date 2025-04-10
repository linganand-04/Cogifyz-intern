
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color = color + letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.querySelector(".change").addEventListener("click", function() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    document.body.style.color = "white";
    const colorCode = document.querySelector(".colorCode")
    colorCode.textContent = `Color : ${randomColor}`;
    colorCode.style.color = "black"
});

let gridChild, color = "#000000";

const gridContainer = document.querySelector(".grid-container");
const n = document.getElementById("size");
const enterBtn = document.getElementById("submit");
const colorBtn = document.getElementById("color-btn");

enterBtn.addEventListener("click", () => createGrid(n.value));

colorBtn.addEventListener("input", (e) => {
    color = e.target.value;
    return color;
});

function createGrid(n) {

    removeGrid(gridContainer);

    for (let i = 0; i < n * n; i++) {

        gridContainer.style.gridTemplateColumns = `repeat(${n},1fr)`
        gridContainer.style.gridTemplateRows = `repeat(${n},1fr)`
        gridChild = document.createElement("div");
        gridChild.classList.add("grid-child");
        gridContainer.appendChild(gridChild);
        gridChild.style.cssText =
            `border: 0.5px solid black;`
        gridChild.addEventListener("mouseover", colorFill);
    }

}

function removeGrid(node) {

    while (node.lastElementChild) {
        node.removeChild(node.lastElementChild);
    }
}

function colorFill(e) {
    e.target.style.backgroundColor = color;
}
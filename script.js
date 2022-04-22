let gridChild, color = "#000000";

const gridContainer = document.querySelector(".grid-container");
const body = document.querySelector("body");
const n = document.querySelector("#size");
const enterBtn = document.querySelector("#submit");
const resetBtn = document.querySelector("#reset");
const colorBtn = document.querySelector("#color-btn");

createGrid(10);

body.oncontextmenu = () => {
    return false
};

enterBtn.addEventListener("click", () => createGrid(n.value));

colorBtn.addEventListener("input", (e) => {
    color = e.target.value;
    return color;
});

resetBtn.addEventListener("click", reset);


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
        gridChild.addEventListener("contextmenu", (e) => e.target.style.backgroundColor = "white");
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

function reset() {
    window.location.reload();
}
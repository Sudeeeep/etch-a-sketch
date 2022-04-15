const gridContainer = document.createElement("div");
let gridChild;

gridContainer.classList.add("grid-container");
document.body.append(gridContainer);
gridContainer.style.cssText =
    `width: 60%;
    height: 80%;
    margin: 50px auto;
    display: grid;`

let n = document.getElementById("size");
let enterBtn = document.getElementById("submit");

enterBtn.addEventListener("click", () => createGrid(n.value));

function createGrid(n) {

    removeGrid(gridContainer);
    for (let i = 0; i < n * n; i++) {

        gridContainer.style.gridTemplateColumns = `repeat(${n},1fr)`
        gridChild = document.createElement("div");
        gridChild.classList.add("grid-child");
        gridContainer.appendChild(gridChild);
        gridChild.style.cssText =
            `border: 0.5px solid black;`
    }

}

function removeGrid(node) {
    while (node.lastElementChild) {
        node.removeChild(node.lastElementChild);
    }
}
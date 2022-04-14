const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");
document.body.append(gridContainer);
gridContainer.style.cssText =
    `width: 60%;
    height: 80%;
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(16, 1fr);`

let gridChild;
for (let i = 0; i < 256; i++) {
    gridChild = document.createElement("div");
    gridChild.classList.add("grid-child");
    gridContainer.appendChild(gridChild);
    gridChild.style.cssText =
        `border: 1px solid black;`
}
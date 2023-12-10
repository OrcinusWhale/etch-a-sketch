function generateCanvas(height, width) {
    rows = new Array(height).fill().map(() => {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let i=0; i<width; ++i) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseover", (event) => {
                if (pressed)
                    event.target.style.backgroundColor = "black"
            });
            square.addEventListener("mousedown", (event) => event.target.style.backgroundColor = "black");
            row.appendChild(square);
        }
        canvas.appendChild(row);
        return row;
    });
}

function newCanvas(event) {
    event.preventDefault();
    while(canvas.firstChild) {
        canvas.removeChild(canvas.lastChild);
    }
    const newHeight = Number(heightInput.value);
    const newWidth = Number(widthInput.value);
    if (newHeight)
        height = newHeight;
    if (newWidth)
        width = newWidth;
    generateCanvas(height, width);
    closeCanvasDialogue();
}

function openCanvasDialogue() {
    overlay.style.display = "flex";
    widthInput.placeholder = width;
    heightInput.placeholder = height;
}

function closeCanvasDialogue() {
    overlay.style.display = "none";
}

let height = 16;
let width = 16;
const widthInput = document.querySelector("#width");
const heightInput = document.querySelector("#height");
const dialogueSubmit = document.querySelector("#dialogueSubmit");
window.addEventListener("dragstart", (event) => event.preventDefault());
let pressed = false;
document.addEventListener("mousedown", () => pressed = true);
document.addEventListener("mouseup", () => pressed = false);
const overlay = document.querySelector("#overlay");
const canvas = document.querySelector("#canvas");
let rows = undefined;
generateCanvas(height, width);
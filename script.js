const canvas = document.querySelector("#canvas");
const rows = new Array(16).fill().map(() => {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let i=0; i<16; ++i) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseover", (event) => event.target.style.backgroundColor = "black");
        row.appendChild(square);
    }
    canvas.appendChild(row);
    return row;
});

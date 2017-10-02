import tileGrid from "./components/tileGrid";
import tileBox from "./components/tileBox";

const appDiv = document.getElementById("app");

const grid = tileGrid();

Array.from(new Array(10), () => {
    const box = tileBox();
    grid.children[0].appendChild(box);
});

appDiv.appendChild(grid);
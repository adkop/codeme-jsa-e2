import listComponent from "./components/listComponent";

const APP_ELEMENT = document.getElementById("app");
APP_ELEMENT.appendChild(listComponent());

// .innerHTML
// APP_ELEMENT.insertAdjacentElement("beforeBegin", listComponent());
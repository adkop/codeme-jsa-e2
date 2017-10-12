import template from "../../../src/js/utils/template";

import html from "../tpl/list.tpl";

import sortable from "../../../src/js/sortable";
import listItemComponent from "./listItemComponent";

function fetchData() {
    return fetch("/public/json/songs.json").then(response => response.json());
}

function listComponent() {
    const listElement = template(html).wrappers[0];

    fetchData().then(data => {
        data.map(model => listElement.insertAdjacentElement("beforeEnd", listItemComponent(model)));
    });

    sortable(listElement);
    return listElement;
}

export default listComponent;
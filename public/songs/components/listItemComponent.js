import template from "../../../src/js/utils/template";
import draggable from "../../../src/js/utils/draggable";

import html from "../tpl/listitem.tpl";

function listItemComponent(model) {
    const element = template(html, model).wrappers[0];
    draggable(element);
    return element;
}

export default listItemComponent;
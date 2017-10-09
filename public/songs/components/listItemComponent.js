import template from "../../../src/js/utils/template";

import html from "../tpl/listitem.tpl";

function listItemComponent(model) {
    return template(html, model).wrappers[0];
}

export default listItemComponent;
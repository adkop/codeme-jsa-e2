import template from "../utils/template";

function tileBox(model) {
    return template(`<article class = "tile-box" role = "listitem"><h2 class = "tile-box__title" ></h2><div class="tile-box__content" ></div> < /
        article >`, model);
}
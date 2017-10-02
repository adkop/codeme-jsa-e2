import render from "../utils/template/template";

export default function tileBox(model) {
    return render(`<article class="tile-box" role="listitem"><h2 class="tile-box__title">{{TITLE}}</h2><div class="tile-box__content" >{{CONTENT}}</div></article >`, model);
}
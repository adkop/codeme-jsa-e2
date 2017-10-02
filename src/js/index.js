const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

const PATTERN = /\{\{(.*)\}\}/gm;

function tpl(html, model) {
    return html.replace(PATTERN, ($0, $1) => model[$1] || $0);
}

function prepareElementsList(document) {
    const wrappers = document.body.children;
    const elements = document.querySelectorAll("ref");

    return [...elements].reduce((obj, element) => {
        const name = element.dataset.element;
        obj[name] = element;
        return obj;
    }, {
        wrappers
    });
}

function DOMParseFromString(str) {
    return (new DOMParser()).parseFromString(str, "text/html");
}


const TPL = compose(prepareElementsList, DOMParseFromString, tpl);
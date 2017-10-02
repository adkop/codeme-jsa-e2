const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

const PATTERN = /\{\{(.*)\}\}/gm;

function htmlModelSet(html, model) {
    return html.replace(PATTERN, ($0, $1) => model[$1] || $0);
}

function prepareElementsList(document) {
    const wrappers = document.body.children;
    const elements = document.querySelectorAll("[ref]");

    return [...elements].reduce((obj, element) => {
        const name = element.getAttribute("ref");
        obj[name] = element;
        return obj;
    }, {
        wrappers
    });
}

function DOMParseFromString(str) {
    return (new DOMParser()).parseFromString(str, "text/html");
}

const template = compose(prepareElementsList, DOMParseFromString, htmlModelSet);
export default function prepareElementsList(document) {
    const wrappers = document.body.children;
    const elements = document.querySelectorAll("[ref]");

    return [...elements].reduce((obj, element) => {
        const name = element.getAttribute("ref");
        obj[name] = element;
        return obj;
    }, {
        wrappers
    });
};
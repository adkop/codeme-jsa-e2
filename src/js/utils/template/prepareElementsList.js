export default function prepareElementsList(fragment) {
    const wrappers = fragment.children;
    const elements = fragment.querySelectorAll("[ref]");

    return [...elements].reduce((obj, element) => {
        const name = element.getAttribute("ref");
        obj[name] = element;
        return obj;
    }, {
        wrappers
    });
};
export function on(element, types, callback) {
    types.split(/\s/).map(
        type => element.addEventListener(type, callback, false)
    );
}

export function off(element, types, callback) {
    types.split(/\s/).map(
        type => element.removeEventListener(type, callback, false)
    );
}

function getStyle(node, property) {
    const style = document.defaultView.getComputedStyle(node, '');

    return property ? value[style] : style;
}

function changeStyle(node, ...sources) {
    Object.assign(node.style, ...sources);
}

export const css = (function (get, change) {
    return function (element, property, value) {
        const style = element && element.style;

        if (!style) {
            return;
        }

        if ("object" !== typeof property) {
            if (!value) {
                return get(element, property);
            }

            return change(element, {
                [name]: value
            })
        }

        change(element, property);
    };
}(getStyle, changeStyle));

export default {
    css,
    off,
    on
}
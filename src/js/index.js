const module = {
    nodeName: "div",
    attributes: {
        className: "find-text",
        role: "toolbar"
    },
    childNodes: [{
        nodeName: "form",
        attributes: {
            action: "#",
            method: "GET",
            className: "find-text__form"
        },
        childNodes: [{
            nodeName: "fieldset",
            attributes: {
                name: "find"
            }
        }]
    }]
};

function objectToHTML(object) {
    let htmlObject = object;
    const attrMap = {
        className: "class"
    }

    if (!Array.isArray(htmlObject)) {
        htmlObject = [htmlObject];
    }

    function htmlAttributes(attributes) {
        return Object.keys(attributes || []).map(attributeName => `${attrMap[attributeName] || attributeName}="${attributes[attributeName]}"`).join(" ");
    }

    return htmlObject.map(({
        nodeName,
        attributes,
        childNodes
    }) => `<${nodeName} ${htmlAttributes(attributes)}>${childNodes ? objectToHTML(childNodes) : ""}</${nodeName}>`).join("");
}

console.log(objectToHTML(module));


const html = `<div class="{{CLASS_NAME}}" role="toolbar">
    <form action="#" method="GET" class="{{CLASS_NAME_FORM}}">
        <fieldset name="find" data-element="fieldset">{{TEXT}}</fieldset>
    </form>
</div><div>jfdhjfdsfg</div>`;

const PATTERN = /\{\{(.*)\}\}/gm;


function tpl(str, model) {
    return str.replace(PATTERN, ($0, $1) => {
        return model[$1] || $0;
    });
}

// ------
const fragment = document.createDocumentFragment();
const div = document.createElement("div");

div.innerHTML = html;

fragment.appendChild(div.firstElementChild);

console.log(fragment);

// ------


const FRAGMENT = (new DOMParser()).parseFromString(tpl(html, {
    TEXT: "La La La"
}), "text/html");


console.log(FRAGMENT);
export default function TPLParseFromString(str) {
    const template = document.createElement("template");
    template.innerHTML = str;

    return document.adoptNode(template.content, true);
}
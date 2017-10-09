function templateParseFromString(str) {
    const template = document.createElement("template");
    template.innerHTML = str;

    return document.adoptNode(template.content, true);
}

export default templateParseFromString;

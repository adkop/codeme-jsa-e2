const PATTERN = /\{\{([^:]+?)\}\}/gm;

const p = {
    nl2br: function (data) {
        return data.replace(/\n/gm, "<br>");
    }
}


function modelToHTML(html, model) {
    const data = Object(model);
    return html.replace(PATTERN, ($0, $1) => {
        const splitStrArray = $1.split("|");
        console.log(splitStrArray);
        const paramName = 1 < splitStrArray.length ? splitStrArray[0] : $1;

        const dataResult = data[paramName];
        const output = p[splitStrArray[1]] ? p[splitStrArray[1]](dataResult) : dataResult;

        return output || $0
    });
}

export default modelToHTML;
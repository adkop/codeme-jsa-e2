const PATTERN = /\{\{([^:]+?)\}\}/gm;

const pipes = {
    nl2br: function (data) {
        return data.replace(/\n/gm, "<br>");
    }
}


function modelToHTML(html, model) {
    const data = Object(model);
    return html.replace(PATTERN, ($0, $1) => {
        const splitStrArray = $1.split("|");
        const paramName = 1 < splitStrArray.length ? splitStrArray[0] : $1;

        const dataResult = data[paramName];
        const output = pipes[splitStrArray[1]] ? pipes[splitStrArray[1]](dataResult) : dataResult;

        return output || $0
    });
}

export default modelToHTML;

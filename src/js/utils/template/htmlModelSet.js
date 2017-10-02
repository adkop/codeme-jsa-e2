const PATTERN = /\{\{([^:]+?)\}\}/gm;

function htmlModelSet(html, model) {
    const data = Object(model);
    return html.replace(PATTERN, ($0, $1) => data[$1] || $0);
}

export default htmlModelSet;
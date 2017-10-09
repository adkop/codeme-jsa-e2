function set(object, path, value) {
    // [songs, list]
    const pathArray = path.split(/\./);
    const lastName = pathArray.pop();

    const lastObject = pathArray.reduce((parent, name) => {
        if (!parent[name] || "object" !== typeof parent[name]) {
            parent[name] = {};
        }
        return parent[name];
    }, Object(object));

    lastObject[lastName] = value;
    return object;
}

export default set;
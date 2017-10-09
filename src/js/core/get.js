function get(object, path, defaultValue) {
    // ["songs", "list"]
    return path.split(/\./gm).reduce((parent, name) => {
        return (parent && "object" === typeof parent) ? parent[name] : undefined;
    }, object) || defaultValue;
}

export default get;

// set(obj, "songs.list", "lala");
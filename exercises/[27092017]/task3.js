/**
 *  Zadanie 3.
 *  
 *  Napisz funkcje, która jako paramtr przyjmie obiekt przypisany do zmiennej module i zwróci fragment dokumentu interface DOM
 *  z drzewem odzwierciedlającym dany obiekt. Zrób to tak, żeby nie odzwierciedlać obiektu w stringu ale bezpośrednio w interface DOM.
 */
 
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


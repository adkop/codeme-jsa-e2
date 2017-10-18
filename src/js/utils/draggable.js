const defaultOptions = {
    centerToCursor: false
};

function draggable(element, opt) {
    const options = Object.assign({}, defaultOptions, opt);
    let initialLeft,
        initialTop,
        pointTop,
        pointLeft,
        initialPageX,
        initialPageY;

    const placeholder = element.cloneNode();

    element.addEventListener("mousedown", onDragStart, false);

    const elementFromPoint = function (x, y) {
        const listElement = placeholder.closest("[role=list]");
        const listItems = listElement && [...listElement.children];
        let output = null;
        listItems.some(item => {
            const rect = item.getBoundingClientRect();
            if (item !== placeholder) {
                if ((rect.left < x && x < rect.right) && rect.top < y && y < rect.bottom) {
                    output = item;
                    return true;
                }
            }

            return false;
        });

        return output;
    };


    function onDragStart(e) {
        const rect = element.getBoundingClientRect();

        pointLeft = rect.width / 2;
        pointTop = rect.height / 2;
        initialPageX = e.pageX;
        initialPageY = e.pageY;
        initialLeft = options.centerToCursor ?
            e.pageX - pointLeft :
            rect.left;
        initialTop = options.centerToCursor ?
            e.pageY - pointTop :
            rect.top;

        Object.assign(element.style, {
            top: initialTop + "px",
            left: initialLeft + "px"
        });

        element.setAttribute("aria-grabbed", "true");
        element.classList.add("grabbed");

        element.insertAdjacentElement("beforeBegin", placeholder);

        document.body.appendChild(element);

        document.addEventListener("mousemove", onDrag, false);

        document.addEventListener("mouseup", onDragEnd, false);
    }

    function onDrag(e) {
        Object.assign(element.style, {
            transform: `translate(${e.pageX - initialPageX}px, ${e.pageY - initialPageY}px)`
        });

        console.log(elementFromPoint(e.pageX, e.pageY))
    }

    function onDragEnd(e) {
        document.removeEventListener("mousemove", onDrag);
        element.setAttribute("aria-grabbed", "false");
        element.classList.remove("grabbed");
        element.style.transform = "";
        placeholder.parentNode.replaceChild(element, placeholder);
    }
}

export default draggable;
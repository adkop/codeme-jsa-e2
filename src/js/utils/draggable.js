const defaultOptions = {
    centerToCursor: false
};

function draggable(element, opt) {
    const options = Object.assign({}, defaultOptions, opt);
    let initialLeft,
        initialTop,
        pointTop,
        pointLeft;

    const placeholder = element.cloneNode();

    element.addEventListener("mousedown", onDragStart, false);

    const elementFromPoint = (function () {
        const listElement = element.closest("[role=list]");
        const listItems = listElement && [...listElement.children];
        return function (x, y) {
            let output = null;
            listItem.some(item => {
                const rect = item.getBoundingClientRect();

                if ((rect.left < x && x < rect.right) && rect.top < y && y < rect.bottom) {
                    output = item;
                    return true;
                }

                return false;
            });

            return output;
        }
    }());


    function onDragStart(e) {
        const rect = element.getBoundingClientRect();

        pointLeft = rect.width / 2;
        pointTop = rect.height / 2;
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

        document.addEventListener("mousemove", onDrag, false);

        document.addEventListener("mouseup", onDragEnd, false);
    }

    function onDrag(e) {
        Object.assign(element.style, {
            top: e.pageY - pointTop + "px",
            left: e.pageX - pointLeft + "px"
        });
    }

    function onDragEnd(e) {
        document.removeEventListener("mousemove", onDrag);
        element.setAttribute("aria-grabbed", "false");
        element.classList.remove("grabbed");
        placeholder.remove();
    }
}

export default draggable;
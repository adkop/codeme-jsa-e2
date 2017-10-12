function sortable(listElement) {
    function on(element, types, callback) {
        types.split(/\s/).map(
            type =>
            element.addEventListener(type, callback, false)
        );
    }

    function off(element, types, callback) {
        types.split(/\s/).map(
            type =>
            element.removeEventListener(type, callback, false)
        );
    }

    // [...listElement.children].map();
    // "dragover dragenter dragleave"
    on(listElement, "mousedown", function (e) {
        const boxElement = e.target.closest("[role=listitem]");
        console.log(boxElement);
        if (!boxElement) {
            return false;
        }

        on(boxElement, "dragstart", onDragStart);
        on(boxElement, "drag", onDrag);

        on(boxElement, "dragend drop", function (e) {
            this.setAttribute("aria-grabbed", "false");
            this.classList.remove("grabbed");
            this.style.opacity = 0.3;
            this.style.visibility = "hidden";
        });
    });

    on(listElement, "mouseup", function (e) {
        const boxElement = e.target.closest("[role=listitem]");

        off(boxElement, "dragstart", onDragStart);

        off(boxElement, "drag", onDrag);
    });

    function onDragStart(e) {
        e.dataTransfer.setDragImage(this, 0, 0);
        e.dataTransfer.dropEffect = "move";
        e.dataTransfer.setData("text/plain", "lalala");
        this.setAttribute("aria-grabbed", "true");
        this.classList.add("grabbed");
    }

    function onDrag(e) {
        const el = document.elementFromPoint(
            e.pageX, e.pageY
        );
        const dragOverBoxElement = el.closest("[role=listitem]");
        //console.log(dragOverBoxElement);
    }

    function css(element, ...rest) {
        let obj = rest[0];
        if (1 < rest.length && "string" === typeof obj) {
            obj = {
                [rest[0]]: rest[1]
            }
        }

        Object.assign(element.style, obj);
    }
}

export default sortable;
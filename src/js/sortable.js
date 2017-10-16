import { css, on, off } from "./utils/dom";

function sortable(listElement) {
    // [...listElement.children].map();
    // "dragover dragenter dragleave"

    on(listElement, "mousedown", function (e) {
        const boxElement = e.target.closest("[role=listitem]");

        if (!boxElement) {
            return false;
        }

        boxElement.setAttribute("draggable", true);
        on(document, "mousemove", onMouseMove);
        /*  on(boxElement, "dragstart", onDragStart);
         on(boxElement, "drag", onDrag);
         on(boxElement, "dragend", onDragEnd); */
    });

    on(listElement, "dragover dragenter", function (e) { e.preventDefault(); });
    on(listElement, "drop", onDrop);

    on(listElement, "mouseup", function (e) {
        const boxElement = e.target.closest("[role=listitem]");

        off(document, "mousemove", onMouseMove);
        off(boxElement, "drag", onDrag);
        off(boxElement, "dragstart", onDragStart);

        boxElement.removeAttribute("draggable");
    });

    const listItems = [...listElement.querySelectorAll("[role=listitem]")].map(item => {
        on(item, "dragover", onDragOver);
        on(item, "dragenter", onDragEnter);
        on(item, "dragleave", onDragLeave);
        return item;
    });

    function onDragStart({ dataTransfer }) {
        // e.dataTransfer.setDragImage(this, 0, 0);
        dataTransfer.effectAllowed = "move";
        dataTransfer.dropEffect = "move";
        setData(dataTransfer, this);

        this.setAttribute("aria-grabbed", "true");
        this.classList.add("grabbed");
    }

    function onMouseMove(e) {
        console.log(e.target);
    }

    function onDrag(e) {
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.dropEffect = "move";
        const el = document.elementFromPoint(e.pageX, e.pageY);
        const dragOverBoxElement = el.closest("[role=listitem]");
    }

    function onDragEnd(e) {
        e.preventDefault();
        e.dataTransfer.clearData();

        this.setAttribute("aria-grabbed", "false");
        this.classList.remove("grabbed");
    }

    function onDragEnter(e) {
        e.stopPropagation();
    }

    function onDragLeave(e) {
        e.stopPropagation();
    }

    function onDragOver(e) {
        e.preventDefault();
    }

    function onDrop(e) {
        e.preventDefault();
        console.log("-----", e.type, "-----");
        console.log(e.dataTransfer.getData("text/plain"));
        console.log(e.dataTransfer.files);
    }
}

function setData(dataTransfer, dragElement) {
    var data = dragElement.getAttribute('aria-label') || dragElement.id || 'grabbed';
    try {
        dataTransfer.setData('text/plain', data);
    } catch (ex) {
        dataTransfer.clearData('Text');
        dataTransfer.setData('Text', data);
    }
}

export default sortable;
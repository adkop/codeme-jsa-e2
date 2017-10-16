function draggable(element) {

    element.addEventListener("mousedown", onDragStart, false)


    function onDragStart(e) {
        const rect = element.getBoundingClientRect();
        const pointLeft = rect.width / 2;
        const pointTop = rect.height / 2;
        const initialLeft = e.pageX - pointLeft;
        const initialTop = e.pageY - pointTop;

        Object.assign(element.style, {
            top: initialTop + "px",
            left: initialLeft + "px"
        });

        element.setAttribute("aria-grabbed", "true");
        element.classList.add("grabbed");



        document.addEventListener("mousemove", onDrag, false);

        document.addEventListener("mouseup", onDragEnd, false);
    }

    function onDrag(e) {
        element.style.left = `${e.pageX}px`;
        console.log(e.type);
    }

    function onDragEnd(e) {
        document.removeEventListener("mousemove", onDrag);
        element.setAttribute("aria-grabbed", "false");
        element.classList.remove("grabbed");
    }
}

export default draggable;
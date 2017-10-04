const log = (title, ...rest) => {
    const header = "function" === typeof title ? title.name : title;
    console.log("-".repeat(10), ` ${header} `, "-".repeat(10), "\n\n", ...rest, "\n\n");
};

export function ws_1() {
    const foo = 120;

    const obj = {
        foo
    };

    obj.foo = 1500;

    log(ws_1, foo, obj.foo);
}

export function ws_2(name, value) {
    log(ws_2, {
        [name]: value
    });
}

export function ws_3() {
    const obj = {};

    Object.defineProperty(obj, "name", {
        value: "Marcin",
        configurable: true,
        enumerable: true,
        writable: true
    });

    log(
        ws_3, obj,
        Object.keys(obj),
        "\n\n-\n\n",
        Object.getOwnPropertyDescriptor(obj, "name")
    );

    Object.defineProperty(obj, "name", {
        value: 100
    });

    log(
        ws_3, obj, "\n",
        obj.name,
        "\n\n-\n\n",
        Object.getOwnPropertyDescriptor(obj, "name")
    );

    obj.name = "Anna";

    log(
        ws_3, obj, "\n",
        obj.name,
        "\n\n-\n\n",
        Object.getOwnPropertyDescriptor(obj, "name")
    );
}

export function ws_4() {
    const form = document.getElementById("form");
    const checkbox = form.elements.icb;

    const obj = Object.defineProperties({}, {
        checked: {
            get: function () {
                return checkbox.checked;
            },
            set: function (state) {
                const newState = /true/i.test(state);
                const oldState = this.checked;

                checkbox.parentNode.setAttribute("aria-checked", newState);
                checkbox.checked = newState;

                log(ws_4, `newState: ${newState}`, "\n\n", `oldState: ${oldState}`)
            }
        }
    });

    obj.checked = true;
}

export default {
    ws_1,
    ws_2,
    ws_3,
    ws_4
};
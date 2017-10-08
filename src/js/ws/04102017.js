const log = (title, ...rest) => {
    const header = "function" === typeof title ? title.name : title;
    console.log("-".repeat(10), ` ${header} `, "-".repeat(10), "\n\n", ...rest, "\n\n");
};

const logElement = document.getElementById("log");

export function ws_1() {
    const foo = 100;

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

    checkbox.addEventListener("click", e => console.log(e.target.checked, obj.checked), false);
}

sessionStorage.getItem("nameSItem")
localStorage.setItem("nameSItem", JSON.stringify({ a: 1 }));

localStorage.nameSItem = "1";

window.addEventListener("storage", function (e) {
    if (e.key === "test") {
        if (e.oldValue !== e.newValue) {
            logElement.innerHTML = e.newValue;
        }
        return;
    }

    console.log(e.key);
});

console.log('start!');
setTimeout(function () {
    console.log('ping');
    setTimeout(function () {
        console.log('pong');
        setTimeout(function () {
            console.log('end!');
        }, 0);
    }, 0);
}, 0);


let isMomHappy = true;

const willGetNewiPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            const iPhone = {
                type: "X",
                color: "pink"
            };

            resolve(iPhone); // fulfill
        } else {
            const reason = new Error("Mom is not happy");

            reject(reason);
        }
    }
);

const askMom = function () {
    willGetNewiPhone
        .then(function (phone) {
            console.log(phone);
            return Promise.resolve(`iPhone ${phone.type}`);
        })
        .then(function (fulfilled) {
            console.log(fulfilled);
        })
        .catch(function (error) {
            console.log(error.message);
        })
};

askMom();


const xhPromiseTest = new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "/");

    xhr.addEventListener("load", function () {
        resolve(xhr.response);
    });

    xhr.addEventListener("error", function () {
        reject({
            message: "XHR out"
        });
    });

    xhr.send();
});

xhPromiseTest.then(function (response) {
    logElement.textContent = response;
});

// postMessage

window.addEventListener("message", function (e) {
    console.log(e);
});


const ifr = document.querySelector("iframe");

function popup() {
    const newWindow = window.open("about:blank", "POPUP");

    newWindow.postMessage({
        width: 1000,
        height: 1800
    }, "*");
}

setTimeout(popup, 1000);



export default {
    ws_1,
    ws_2,
    ws_3,
    ws_4
};
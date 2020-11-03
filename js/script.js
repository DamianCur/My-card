function welcome() {
    console.log("Cześć");
}

let headerButton = document.querySelector(".header__button");
let body = document.querySelector(".body");

headerButton.addEventListener("click", () => {
    body.classList.toggle("js_body");
});


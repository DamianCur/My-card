

let headerButton = document.querySelector(".header__button");
let body = document.querySelector(".body");
let article = document.querySelector("article");

headerButton.addEventListener("click", () => {
    body.classList.toggle("js__body");
});

headerButton.addEventListener("click", () => {
    if (headerButton.innerText === "Motyw ciemny") {
        headerButton.innerText = "Motyw jasny";
    }
    else {
        headerButton.innerText = "Motyw ciemny";
    }

});
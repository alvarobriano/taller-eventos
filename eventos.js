const divButton = document.querySelector("body > div");

divButton.addEventListener("click", () => {
    alert("Hola! Soy el div");
});

const button = document.querySelector("body > div > button");

button.addEventListener("click", (event) => {
    event.stopPropagation();
});
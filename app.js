let button = document.querySelector(".btn btn-primary")
let button2 = document.querySelector(".btn btn-secondary")
let body = document.querySelector("body")

button.addEventListener("click", () => {
    button.classList.toggle('btn-secondary')
})

const mainButton = document.querySelector(".buttonLink")
mainButton.addEventListener("click", buttonSuc)
function buttonSuc(){
    let button = document.querySelector(".success");
    button.classList.add("showSuccess")
    button.addEventListener("click", function (){
        button.classList.remove("showSuccess")
    })
}
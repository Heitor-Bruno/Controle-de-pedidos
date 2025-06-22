alert("Olá Mundo!");
const rotulo = document.getElementsByClassName("rotulos");
const btnsun = document.body.getElementByClassName("tema");
function darkTheme() {
    document.body.style.backgroundColor = "black";
    document.getElementByClassName("rotulos").style.color = "#FF0000";
}
const btnsun = document.getElementsByClassName("tema");
const areaRegistro = document.getElementsByClassName("formulario");
const darkTheme = #262626;

btnsun.onclick = function() {
    areaRegistro.style.backgroundColor = darkTheme.value;
}
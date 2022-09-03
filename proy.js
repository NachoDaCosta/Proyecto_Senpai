const abrirmodal = document.getElementById('login');
const modal = document.querySelector('.modal');
const cerrarmodal = document.getElementById('cerrar_modal');
const cerrarmodalx = document.getElementById('cerrar_modalx');
const miempresa=document.getElementById('miempresa')
const miorg=document.getElementById('miorg')


miempresa.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('mostrar');
    abrirmodal.innerHTML="Hola, Empresa"
});

miorg.addEventListener('click', (e) => {
    e.preventDefault();
    abrirmodal.innerHTML = "Hola, organizacion"
    modal.classList.remove('mostrar');
});

abrirmodal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('mostrar');
});

cerrarmodal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('mostrar');
});

cerrarmodalx.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('mostrar');
});

miempresa.addEventListener('click',texto());
function texto(){

}   
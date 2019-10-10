var miTitulo = document.querySelector('h1');
var miBoton = document.querySelector('button');
miTitulo.innerHTML = 'Piratas de Corazon';

function imgResize() {
    document.querySelector('img').setAttribute('width', '400');
    document.querySelector('img').setAttribute('height', '468');
}

var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/icon-01.png') {
      miImage.setAttribute('src','images/icon-02.png');
    } else {
      miImage.setAttribute('src', 'images/icon-01.png');
    }
}

function cambiarUsuario(){
    var miNombre = prompt('Por favor, ingrese un nombre.');
    localStorage.setItem('nombre',miNombre);
    miTitulo.textContent = 'Piratas de ' + miNombre ;
}

if (!localStorage.getItem('nombre')) {
    cambiarUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Piratas de ' + nombreAlmacenado ;
}

miBoton.onclick = function(){
    cambiarUsuario();
}


document.addEventListener('DOMContentLoaded', function () {
    const iconoMenu = document.querySelector('.header__icono');
    const barraNavegacion = document.querySelector('.header__barra');

    iconoMenu.addEventListener('click', function () {
        barraNavegacion.classList.toggle('active');
    });
});

let x = 1;

if (x > 5) {
    console.log('10 es mayor');
} else {
    console.log('10 es menor');
}

let estacion = 5;

switch (estacion) {
    case 1:
        console.log('Es verano');
    break;
    case 2:
        console.log('Es otoño');
    break;
    case 3:
        console.log('Es primavera');
    break;
    case 4:
        console.log('Es invierno');
    break;
    default:
        console.log('No hay mas estaciones');
}

const retiro = 2000;
const saldo = 1100;

if (retiro < saldo) {
    console.log('Retiro exitoso');
} else {
    console.log('Saldo Insuficiente');
}
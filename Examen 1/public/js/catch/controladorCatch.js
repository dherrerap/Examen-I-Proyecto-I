'use strict';

let sPokemon = obtenerPokemones();
let btnEntrenadores = document.querySelector('#menuEntrenadores');
let btnPokedex = document.querySelector('#menuPokedex');

let boton = document.querySelector('#boton');
let img = document.querySelector('#pokemonSalvaje');

btnEntrenadores.addEventListener('click', limpiarLocalStorage);
btnPokedex.addEventListener('click', limpiarLocalStorage);

let i = 0;
img.addEventListener('click', function(){
    atrapar(i)
});

window.setInterval(generarPokemon, 3000);

function generarPokemon() {
    i = Math.floor(Math.random() * sPokemon.length);

    img.src = sPokemon[i]['foto'];
    
    img.style.position = 'absolute';
    
    img.style.left = Math.round(Math.random() * (screen.width - 300)) + 'px';
    img.style.top = ( Math.round(Math.random() * (screen.height - 300)) + 50) + 'px';

    // a.style.right = '0';
    // a.style.top = Math.round(Math.random() * document.body.scrollHeight) + 'px';
    // b.appendChild(img);
}

function atrapar(pNumero){
    let id = localStorage.getItem('idEntrenador');
    let sNombreEntrenador = localStorage.getItem('entrenadorActivo');
    let nNumeroPokemon = sPokemon[pNumero]['numeroPokemon'];
    let sNombrePokemon = sPokemon[pNumero]['nombrePokemon'];

    agregarPokemon(id, nNumeroPokemon, sNombrePokemon);
    swal({
        title: 'Felicidades '+sNombreEntrenador+'!',
        text: 'Has atrapado un '+ sPokemon[pNumero]['nombrePokemon'],
        type: 'success',
        confirmButtonText: 'Entendido'
    });
};

function limpiarLocalStorage(){
    localStorage.removeItem('entrenadorActivo');
    localStorage.removeItem('idEntrenador');
};
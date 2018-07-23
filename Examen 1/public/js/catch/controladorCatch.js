'use strict';

let sPokemon = obtenerPokemones();
// let sListaEntrenadores = obtenerEntrenadores();
// mostrarEntrenadores();

let btnEntrenadores = document.querySelector('#menuEntrenadores');
let btnPokedex = document.querySelector('#menuPokedex');

// let selectEntrenador = document.querySelector('#txtEntrenador');
let boton = document.querySelector('#boton');
let img = document.querySelector('#pokemonSalvaje');

btnEntrenadores.addEventListener('click', limpiarLocalStorage);
btnPokedex.addEventListener('click', limpiarLocalStorage);

let i = 0;
img.addEventListener('click', function(){
    atrapar(i)
});

window.setInterval(generarPokemon, 2000);

function generarPokemon() {
    i = Math.floor(Math.random() * sPokemon.length);

    if(sPokemon[i]['gif'] == ''){
        img.src = sPokemon[i]['foto'];
    }
    else{
        img.src = sPokemon[i]['gif'];
    }
    
    img.style.position = 'absolute';
    
    img.style.left = Math.round(Math.random() * (screen.width - 300)) + 'px';
    img.style.top = ( Math.round(Math.random() * (screen.height - 350)) + 80) + 'px';

    // a.style.right = '0';
    // a.style.top = Math.round(Math.random() * document.body.scrollHeight) + 'px';
    // b.appendChild(img);
}

function atrapar(pNumero){
    let id = localStorage.getItem('idEntrenador');
    let sNombreEntrenador = localStorage.getItem('nombreEntrenador');
    // let id = selectEntrenador.value;
    // let sNombreEntrenador = '';
    // for(let i=0; i < sListaEntrenadores.length; i++){
    //     if(id == sListaEntrenadores[i]['_id']){
    //         sNombreEntrenador = sListaEntrenadores[i]['nombreEntrenador'];
    //     }
    // }

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

// function mostrarEntrenadores(){
//     let selectEntrenador = document.getElementById('txtEntrenador');
//     selectEntrenador.innerHTML = '';

//     for(let i=0; i < sListaEntrenadores.length; i++){
//         let nuevaOpcion = document.createElement('option');
//         nuevaOpcion.text = sListaEntrenadores[i]['nombreEntrenador'];
//         nuevaOpcion.value = sListaEntrenadores[i]['_id'];
//         selectEntrenador.add(nuevaOpcion);
//     }
// };
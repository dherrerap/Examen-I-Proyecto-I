'use strict';

let sPokemon = obtenerPokemones();

window.setInterval(generarPokemon, 3000);

function generarPokemon() {
    document.querySelectorAll('button').removeChild;
    let i = Math.floor(Math.random() * sPokemon.length);
    console.log(i);
    
    let a = document.createElement('div');
    let b = document.createElement('button');
    b.classList.add('btn');
    let img = document.createElement('img');
    img.src = sPokemon[i]['foto'];
    
    a.style.position = 'absolute';
    
    // Stick on the left
    a.style.left = Math.round(Math.random() * (screen.width - 300)) + 'px';
    a.style.top = ( Math.round(Math.random() * (screen.height - 300)) + 50) + 'px';
    
    // Stick on the right
    // a.style.right = '0';
    // a.style.top = Math.round(Math.random() * document.body.scrollHeight) + 'px';
    
    b.appendChild(img);
    a.appendChild(b);
    a.addEventListener('onClick', atrapar(i));
    document.body.appendChild(a);
}

function atrapar(pNumero){
    console.log(pNumero);
    console.log(sPokemon[pNumero]['nombrePokemon']);
}
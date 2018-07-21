'use strict';

let sListaAtributos = obtenerAtributos();
let sListaPokemon = obtenerPokemones();
// mostrarAtributoPrincipal();
mostrarAtributo('atributoPrincipal');
mostrarAtributoSecundario();
listarPokemon();

const inputNumero = document.querySelector('#txtNumero');
const inputNombre = document.querySelector('#txtNombre');
const selectAtributoPrincipal = document.querySelector('#atributoPrincipal');
const selectAtributoSecundario = document.querySelector('#atributoSecundario');
const btnFoto = document.querySelector('#btnSeleccionarImagen');
const btnRegistrar = document.querySelector('#btnRegistrar');

inputNumero.value = siguienteNumero();
btnRegistrar.addEventListener('click', registrar);

function mostrarAtributoPrincipal(){
    let selectAtributo = document.getElementById('atributoPrincipal');
    selectAtributo.innerHTML = '';

    for(let i=0; i < sListaAtributos.length; i++){
        let sAtributo = sListaAtributos[i]['nombre'];
        let nuevaOpcion = document.createElement('option');
        nuevaOpcion.text = sAtributo;
        nuevaOpcion.value = sAtributo;
        selectAtributo.add(nuevaOpcion);
    }
};

function mostrarAtributoSecundario(){
    let selectAtributo = document.getElementById('atributoSecundario');
    selectAtributo.innerHTML = '';

    let nuevaOpcion = document.createElement('option');
    nuevaOpcion.text = 'Ninguno';
    nuevaOpcion.value = '';
    selectAtributo.add(nuevaOpcion);

    for(let i=0; i < sListaAtributos.length; i++){
        let sAtributo = sListaAtributos[i]['nombre'];
        nuevaOpcion = document.createElement('option');
        nuevaOpcion.text = sAtributo;
        nuevaOpcion.value = sAtributo;
        selectAtributo.add(nuevaOpcion);
    }
};

function mostrarAtributo(pSelectAtributo){
    let selectAtributo = document.getElementById(pSelectAtributo);
    selectAtributo.innerHTML = '';

    for(let i=0; i < sListaAtributos.length; i++){
        let sAtributo = sListaAtributos[i]['nombre'];
        let nuevaOpcion = document.createElement('option');
        nuevaOpcion.text = sAtributo;
        nuevaOpcion.value = sAtributo;
        selectAtributo.add(nuevaOpcion);
    }
};

function siguienteNumero(){
    if(sListaPokemon.length == 0){
        return 1;
    }
    else{
        return sListaPokemon.length+1;
    }
}

function registrar(){
    let nNumero = siguienteNumero();
    let sNombre = inputNombre.value;
    let sAtributoPrincipal = selectAtributoPrincipal.value;
    let sAtributoSecundario = selectAtributoSecundario.value;

    let respuesta = registrarPokemon(nNumero, sNombre, sAtributoPrincipal, sAtributoSecundario, imagenUrl);
    if(respuesta.success == true){
        swal({
            title: 'Registro correcto',
            text: respuesta.msg,
            type: 'success',
            confirmButtonText: 'Entendido'
        });
        sListaPokemon = obtenerPokemones();
        listarPokemon();
        inputNumero.value = siguienteNumero();
    }else{
        swal({
            title: 'Registro incorrecto',
            text: respuesta.msg,
            type: 'error',
            confirmButtonText: 'Entendido'
            });
    }   
};

function listarPokemon() {
    if (sListaPokemon.length != 0){
        for(let i = 0; i < sListaPokemon.length; i++){
            let nombreTabla = 'tbl'+sListaPokemon[i]['nombrePokemon'];
            var x = document.createElement("TABLE");
            x.setAttribute("id", nombreTabla);
            x.classList.add('tabla');
            document.body.appendChild(x);

            var p = document.createElement('tbody');
            document.getElementById(nombreTabla).appendChild(p);

            //
            let tbody = document.querySelector('#'+nombreTabla, 'tbody');
            // if(!pFiltro){
            //     pFiltro = '';
            // }
            tbody.innerHTML = '';

            //if( (sListaPokemon[i]['nombrePokemon'].toLowerCase()).includes(pFiltro.toLowerCase()) || (sListPokemon[i]['numeroPokemon'].toLowerCase()).includes(pFiltro.toLowerCase())){
            let filaFoto = tbody.insertRow();
            let cFoto = filaFoto.insertCell();
            let imagen = document.createElement('img');
            imagen.src = sListaPokemon[i]['foto'];
            imagen.classList.add('imageSettings');
            cFoto.appendChild(imagen);

            let filaNumero = tbody.insertRow();
            let celdaCodigo = filaNumero.insertCell();
            celdaCodigo.innerHTML = 'N°.'+sListaPokemon[i]['numeroPokemon'];

            let filaNombre = tbody.insertRow();
            let celdaNombre = filaNombre.insertCell();
            celdaNombre.innerHTML = sListaPokemon[i]['nombrePokemon'];

            let filaAtributoP = tbody.insertRow();
            let celdaAtributoP = filaAtributoP.insertCell();
            celdaAtributoP.innerHTML = sListaPokemon[i]['atributoPrincipal'];
            
            if(sListaPokemon[i]['atributoSecundario'] != ''){
                let filaAtributoS = tbody.insertRow();
                let celdaAtributoS = filaAtributoS.insertCell();
                celdaAtributoS.innerHTML = sListaPokemon[i]['atributoSecundario'];
            }
        }
    }
    else{
        let msgVacio = document.createTextNode("No hay pokemones registrados!");
        document.body.appendChild(msgVacio);
    }
}
'use strict';

let sListaEntrenadores = obtenerEntrenadores();
listarEntrenadores();

const inputNumero = document.querySelector('#txtNumero');
const inputNombre = document.querySelector('#txtNombre');
const inputEdad = document.querySelector('#txtEdad');
const selectSexo = document.querySelector('#txtSexo');
const btnFoto = document.querySelector('#btnSeleccionarImagen');
const btnRegistrar = document.querySelector('#btnRegistrar');
const inputBuscar = document.querySelector('#txBuscar');

inputNumero.value = siguienteNumero();
btnRegistrar.addEventListener('click', registrar);
inputBuscar.addEventListener('keyup', function(){
    listarEntrenadores(inputBuscar.value)
});

function siguienteNumero(){
    if(sListaEntrenadores.length == 0){
        return 1;
    }
    else{
        return sListaEntrenadores.length+1;
    }
}

function registrar(){
    let nNumero = inputNumero.value;
    let sNombre = inputNombre.value;
    let nEdad = inputEdad.value;
    let sSexo = selectSexo.value;

    let respuesta = registrarEntrenador(nNumero, sNombre, nEdad, sSexo, imagenUrl);
    if(respuesta.success == true){
        swal({
            title: 'Registro correcto',
            text: respuesta.msg,
            type: 'success',
            confirmButtonText: 'Entendido'
        });
        sListaEntrenadores = obtenerEntrenadores();
        listarEntrenadores();
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

function listarEntrenadores(pFiltro){
    let tbody = document.querySelector('#tblBusqueda tbody');
    if(!pFiltro){
        pFiltro = '';
    }
    tbody.innerHTML = '';

    for(let i = 0; i < sListaEntrenadores.length; i++){
        if( (sListaEntrenadores[i]['numeroEntrenador'] == pFiltro) || (sListaEntrenadores[i]['nombreEntrenador'].toLowerCase()).includes(pFiltro.toLowerCase()) ){
            let fila = tbody.insertRow();

            let celdaNumero = fila.insertCell();
            let celdaNombre = fila.insertCell();
            let celdaEdad = fila.insertCell();
            let celdaSexo = fila.insertCell();

            celdaNumero.innerHTML = sListaEntrenadores[i]['numeroEntrenador'];
            celdaNombre.innerHTML = sListaEntrenadores[i]['nombreEntrenador'];
            celdaEdad.innerHTML = sListaEntrenadores[i]['edad'];
            celdaSexo.innerHTML = sListaEntrenadores[i]['sexo'];
        }
    }
};
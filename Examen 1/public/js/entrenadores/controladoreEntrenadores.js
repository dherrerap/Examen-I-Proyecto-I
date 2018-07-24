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

let regexNumero = /^[0-9]+$/;
let regexNombre = /^[a-zA-ZÑñáéíóúÁÉÍÓÚ0-9 ]+$/;

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
    let bError = false;

    bError = validarRegistro();
    if (!bError) {
        if(document.getElementById('txtImagen').src == 'https://res.cloudinary.com/dherrerap/image/upload/v1532225446/trainer.jpg'){
            imagenUrl = 'https://res.cloudinary.com/dherrerap/image/upload/v1532225446/trainer.jpg';
        }
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
    }else{
        swal({
            title: 'Registro incorrecto',
            text: 'No se pudo registrar el entrenador, revise los campos en rojo',
            type: 'warning',
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
            fila.id = sListaEntrenadores[i]['nombreEntrenador'];

            let celdaNumero = fila.insertCell();
            let celdaNombre = fila.insertCell();
            let celdaFoto = fila.insertCell();
            let celdaEdad = fila.insertCell();
            let celdaSexo = fila.insertCell();
            let celdaCatch = fila.insertCell();

            if(sListaEntrenadores[i]['foto'] == ''){
                celdaFoto.innerHTML = 'No posee'
            }
            else {
                let imagen = document.createElement('img');
                imagen.src = sListaEntrenadores[i]['foto'];
                imagen.classList.add('imageSettings');
                imagen.classList.add('imagenPeque');
                celdaFoto.appendChild(imagen);
            }

            celdaNumero.innerHTML = sListaEntrenadores[i]['numeroEntrenador'];
            celdaNombre.innerHTML = sListaEntrenadores[i]['nombreEntrenador'];
            celdaEdad.innerHTML = sListaEntrenadores[i]['edad'];
            celdaSexo.innerHTML = sListaEntrenadores[i]['sexo'];

            let btnCatch = document.createElement('a');
            btnCatch.href = 'cath.html';
            btnCatch.addEventListener('click', function(){
                guardarDatosEntrenador(sListaEntrenadores[i]['_id'], sListaEntrenadores[i]['nombreEntrenador'])
            });
            btnCatch.classList.add('fas');
            btnCatch.classList.add('fa-link');
            celdaCatch.appendChild(btnCatch);
        }
    }
};

function guardarDatosEntrenador (idEntrenador, nombreEntrenador){
    localStorage.setItem('idEntrenador', idEntrenador);
    localStorage.setItem('nombreEntrenador', nombreEntrenador);
    console.log(localStorage.getItem('idEntrenador'));
}

function validarRegistro(){
    let bError = false;
    let sNombre = inputNombre.value;
    let nEdad = Number(inputEdad.value);

    // Validación nombre
    if (sNombre == '' || (regexNombre.test(sNombre) == false) ){
        inputNombre.classList.add('errorInput');
        bError = true;
    }else{
        inputNombre.classList.remove('errorInput');
    }

    //Validación edad
    if(nEdad == 0 || (regexNumero.test(nEdad) == false) || nEdad < 15 || nEdad > 80){
        inputEdad.classList.add('errorInput');
        bError = true;
    }else{
        inputEdad.classList.remove('errorInput');
    }
    return bError;
};
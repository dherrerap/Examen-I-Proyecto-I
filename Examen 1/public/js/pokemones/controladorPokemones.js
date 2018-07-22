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
const inputBuscar = document.querySelector('#txBuscar');

inputNumero.value = siguienteNumero();
btnRegistrar.addEventListener('click', registrar);
inputBuscar.addEventListener('keyup', function(){
    listarPokemon(inputBuscar.value)
});

let regexNumero = /^[0-9]+$/;
let regexNombre = /^[a-zA-ZÑñáéíóúÁÉÍÓÚ0-9 ]+$/;

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
    let bError = false;

    bError = validarRegistro();

    if (!bError) {
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
    }else{
        swal({
            title: 'Registro incorrecto',
            text: 'No se pudo registrar el pokémon, revise los campos en rojo',
            type: 'warning',
            confirmButtonText: 'Entendido'
        });
    }
};

function listarPokemon(pFiltro) {

    for(let i = 0; i < sListaPokemon.length; i++){
        // if( (sListaPokemon[i]['nombrePokemon'] == pFiltro) || (sListaPokemon[i]['atributoPrincipal'].toLowerCase()).includes(pFiltro.toLowerCase()) || (sListaPokemon[i]['atributoSecundario'].toLowerCase()).includes(pFiltro.toLowerCase()) ){
            let nombreTabla = 'tbl'+sListaPokemon[i]['nombrePokemon'];
            var x = document.createElement('table');
            x.setAttribute("id", nombreTabla);
            x.classList.add('tabla');
            document.getElementById('listar').appendChild(x);

            var p = document.createElement('tbody');
            document.getElementById(nombreTabla).appendChild(p);

            let tbody = document.querySelector('#'+nombreTabla, 'tbody');

            if(!pFiltro){
                pFiltro = '';
            }

            tbody.innerHTML = '';

            if( (sListaPokemon[i]['nombrePokemon'].toLowerCase()).includes(pFiltro.toLowerCase()) ){
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
            let iAtributoP = document.createElement('img');
            for(let j=0; j < sListaAtributos.length;j++){
                if(sListaPokemon[i]['atributoPrincipal'] == sListaAtributos[j]['nombre']){
                    iAtributoP.src = sListaAtributos[j]['foto'];
                    iAtributoP.classList.add('imgAtributo');
                }
            }

            celdaAtributoP.appendChild(iAtributoP);
            // let filaAtributoP = tbody.insertRow();
            // let celdaAtributoP = filaAtributoP.insertCell();
            // celdaAtributoP.innerHTML = sListaPokemon[i]['atributoPrincipal'];
            
            let filaAtributoS = tbody.insertRow();
            let celdaAtributoS = filaAtributoS.insertCell();
            let iAtributoS = document.createElement('img');
            for(let j=0; j < sListaAtributos.length;j++){
                if(sListaPokemon[i]['atributoSecundario'] == sListaAtributos[j]['nombre']){
                    iAtributoS.src = sListaAtributos[j]['foto'];
                    iAtributoS.classList.add('imgAtributo');
                }
            }

            celdaAtributoS.appendChild(iAtributoS);
            // let filaAtributoS = tbody.insertRow();
            // let celdaAtributoS = filaAtributoS.insertCell();
            // if(sListaPokemon[i]['atributoSecundario'] != ''){
            //     celdaAtributoS.innerHTML = sListaPokemon[i]['atributoSecundario'];
            // }else{
            //     celdaAtributoS.innerHTML = '-';
            // }
        }
    }
};

function validarRegistro(){
    let bError = false;
    let sNombre = inputNombre.value;

    // Validación nombre
    if (sNombre == '' || (regexNombre.test(sNombre) == false) ){
        inputNombre.classList.add('errorInput');
        bError = true;
    }else{
        inputNombre.classList.remove('errorInput');
    }

    // Validación foto
    if (document.getElementById('txtImagen').src == 'https://res.cloudinary.com/dherrerap/image/upload/v1532224627/unknow.jpg'){
        btnFoto.classList.add('errorInput');
        bError = true;
    }else{
        btnFoto.classList.remove('errorInput');
    }
    return bError;
};
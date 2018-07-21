'use strict';

function registrarPokemon(pNumero, pNombre, pAtributoPrincipal, pAtributoSecundario, pFoto){
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrar_pokemon',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
            numeroPokemon: pNumero,
            nombrePokemon: pNombre,
            atributoPrincipal: pAtributoPrincipal,
            atributoSecundario: pAtributoSecundario,
            foto: pFoto
        }
    });
    
    peticion.done(function(response){
    respuesta = response;
    });
    
    peticion.fail(function(response){
    
    });
    return respuesta;
};

function obtenerPokemones(){
    let listaAtributos = [];
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_pokemones',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
        }
    });
    
    peticion.done(function(response){
    listaAtributos = response;
    });

    peticion.fail(function(){
    
    });
    return listaAtributos;
};

function getCount(){
    let count = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/get_count',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
        }
    });
    
    peticion.done(function(response){
    count = response;
    });

    peticion.fail(function(){
    
    });
    return count;
};
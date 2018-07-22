'use strict';

function registrarEntrenador(pNumero, pNombre, pEdad, pSexo, pFoto){
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrar_entrenador',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
            numeroEntrenador: pNumero,
            nombreEntrenador: pNombre,
            edad: pEdad,
            sexo: pSexo,
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

function obtenerEntrenadores(){
    let listaEntrenadores = [];
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_entrenadores',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
        }
    });
    
    peticion.done(function(response){
    listaEntrenadores = response;
    });

    peticion.fail(function(){
    
    });
    return listaEntrenadores;
};

function agregarPokemon(id, pNumeroPokemon, pNombrePokemon){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/agregar_pokemon',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            _id : id,
            numero : pNumeroPokemon,
            nombre : pNombrePokemon
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });
  
      return respuesta;
  }
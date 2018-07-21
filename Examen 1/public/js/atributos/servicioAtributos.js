'use strict';

function registrarAtributo(pNombre, pFondo){
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrar_atributo',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
           nombre : pNombre,
           fondo : pFondo
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
};

function obtenerAtributos(){
    let listaAtributos = [];
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_atributos',
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
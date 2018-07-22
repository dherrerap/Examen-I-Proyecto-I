'use strict'
const express = require('express');
const router = express.Router();
const entrenadorApi = require('./entrenador.api');

router.route('/registrar_entrenador')
    .post(function(req, res){
        entrenadorApi.registrar(req, res);
    });

router.route('/listar_entrenadores')
    .get(function(req, res){
        entrenadorApi.listar_todos(req, res);
    });

router.route('/agregar_pokemon')
    .post(function(req, res){
        entrenadorApi.agregar_pokemon(req, res);
});
module.exports = router;
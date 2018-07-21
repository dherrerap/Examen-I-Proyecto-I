'use strict'
const express = require('express');
const router = express.Router();
const atributoApi = require('./atributo.api');

router.route('/registrar_atributo')
    .post(function(req, res){
        atributoApi.registrar(req, res);
    });

router.route('/listar_atributos')
    .get(function(req, res){
        atributoApi.listar_todos(req, res);
    });

module.exports = router;
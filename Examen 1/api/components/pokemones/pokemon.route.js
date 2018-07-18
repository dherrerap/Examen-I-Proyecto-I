'use strict'
const express = require('express');
const router = express.Router();
const pokemonApi = require('./pokemon.api');

router.route('/registrar_pokemon')
    .post(function(req, res){
        pokemonApi.registrar(req, res);
    });

router.route('/listar_pokemones')
    .get(function(req, res){
        pokemonApi.listar_todos(req, res);
    });

module.exports = router;
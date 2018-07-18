'use strict';
let mongoose = require('mongoose');

let pokemonSchema = new mongoose.Schema({
    numeroPokemon : {type : Number, required : true, unique : true},
    nombrePokemon : {type : String, required : true, unique : true},
    tipoPrincipal : {type : String, required : true},
    tipoSecundario : {type : String, required : false},
    foto : {type : String, required : false}
});

module.exports = mongoose.model('Pokemon', pokemonSchema);
'use strict';
let mongoose = require('mongoose');

let pokemonSchema = new mongoose.Schema({
    numeroPokemon : {type : Number, required : true, unique : true},
    nombrePokemon : {type : String, required : true, unique : true},
<<<<<<< HEAD
    atributoPrincipal : {type : String, required : true},
    atributoSecundario : {type : String, required : false},
=======
    tipoPrincipal : {type : String, required : true},
    tipoSecundario : {type : String, required : false},
>>>>>>> 5fbd0d80e840a0e76096b583838b3bc9e3548d64
    foto : {type : String, required : false}
});

module.exports = mongoose.model('Pokemon', pokemonSchema);
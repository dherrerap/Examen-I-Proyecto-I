'use strict';
let mongoose = require('mongoose');

let entrenadorSchema = new mongoose.Schema({
    numeroEntrenador : {type : Number, required : true, unique : true},
    nombreEntrenador : {type : String, required : true, unique : true},
    edad : {type : Number, required : true},
    sexo : {type : String, required : true},
    foto : {type : String, required : false},
    pokemon : [
        {
            numeroPokemon : {type : Number},
            nombrePokemon : {type : String},
            apodoPokemon : {type : String}
        }
    ]
});

module.exports = mongoose.model('Entrenador', entrenadorSchema);
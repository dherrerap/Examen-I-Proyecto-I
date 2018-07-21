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
<<<<<<< HEAD
            nombrePokemon : {type : String},
            apodoPokemon : {type : String}
=======
            nombrePokemon : {type : String}
>>>>>>> 5fbd0d80e840a0e76096b583838b3bc9e3548d64
        }
    ]
});

module.exports = mongoose.model('Entrenador', entrenadorSchema);
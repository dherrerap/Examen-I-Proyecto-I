'use strict';
let mongoose = require('mongoose');

let atributoSchema = new mongoose.Schema({
    nombre : {type : String, required : true, unique : true},
    foto : {type : String, required : false}
});

module.exports = mongoose.model('Atributo', atributoSchema);
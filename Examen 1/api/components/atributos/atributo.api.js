'use strict'
const atributoModel = require('./atributo.model');

module.exports.registrar = function(req, res) {
    let nuevoAtributo = new atributoModel({
        nombre : req.body.nombre,
        foto : req.body.foto
    });

    nuevoAtributo.save(function(error){
        if(error){
            res.json({success : false, msg : 'No se pudo registrar el atributo' + error});
        }else{
            res.json({success : true, msg : 'El atributo se registró con éxito'});
        }
    });
};

module.exports.listar_todos = function(req, res){
    atributoModel.find().sort({nombre : 'asc'}).then(
        function(atributos){
            res.send(atributos);
        }
    );
};
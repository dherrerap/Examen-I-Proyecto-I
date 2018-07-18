'use strict'
const pokemonModel = require('./pokemon.model');

module.exports.registrar = function(req, res) {
    let nuevoPokemon = new pokemonModel({
        numeroPokemon : req.body.numero,
        nombrePokemon : req.body.nombre,
        tipoPrincipal : req.body.tipoPrincipal,
        tipoSecundario : req.body.tipoSecundario,
        foto : req.body.foto
    });

    nuevoPokemon.save(function(error){
        if(error){
            res.json({success : false, msg : 'No se pudo registrar el pokemon' + error});
        }else{
            res.json({success : true, msg : 'El pokemon se registró con éxito'});
        }
    });
};

module.exports.listar_todos = function(req, res){
    pokemonModel.find().sort({nombre : 'asc'}).then(
        function(pokemones){
            res.send(pokemones);
        }
    );
};
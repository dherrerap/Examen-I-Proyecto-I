'use strict'
const pokemonModel = require('./pokemon.model');

module.exports.registrar = function(req, res) {
    let nuevoPokemon = new pokemonModel({
        numeroPokemon: req.body.numeroPokemon,
        nombrePokemon: req.body.nombrePokemon,
        atributoPrincipal: req.body.atributoPrincipal,
        atributoSecundario: req.body.atributoSecundario,
        foto: req.body.foto,
        gif: req.body.gif
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
    pokemonModel.find().sort({numeroPokemon : 'asc'}).then(
        function(pokemones){
            res.send(pokemones);
        }
    );
};

module.exports.get_count = function(req, res){
    pokemonModel.countDocuments({}, function(err, count){
        res.send(count);
        console.log( "Number of docs: ", count );
    });

};
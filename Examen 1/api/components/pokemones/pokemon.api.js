'use strict'
const pokemonModel = require('./pokemon.model');

module.exports.registrar = function(req, res) {
    let nuevoPokemon = new pokemonModel({
<<<<<<< HEAD
        numeroPokemon: req.body.numeroPokemon,
        nombrePokemon: req.body.nombrePokemon,
        atributoPrincipal: req.body.atributoPrincipal,
        atributoSecundario: req.body.atributoSecundario,
        foto: req.body.foto
=======
        numeroPokemon : req.body.numero,
        nombrePokemon : req.body.nombre,
        tipoPrincipal : req.body.tipoPrincipal,
        tipoSecundario : req.body.tipoSecundario,
        foto : req.body.foto
>>>>>>> 5fbd0d80e840a0e76096b583838b3bc9e3548d64
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
<<<<<<< HEAD
    pokemonModel.find().sort({numeroPokemon : 'asc'}).then(
=======
    pokemonModel.find().sort({nombre : 'asc'}).then(
>>>>>>> 5fbd0d80e840a0e76096b583838b3bc9e3548d64
        function(pokemones){
            res.send(pokemones);
        }
    );
<<<<<<< HEAD
};

module.exports.get_count = function(req, res){
    pokemonModel.countDocuments({}, function(err, count){
        res.send(count);
        console.log( "Number of docs: ", count );
    });

=======
>>>>>>> 5fbd0d80e840a0e76096b583838b3bc9e3548d64
};
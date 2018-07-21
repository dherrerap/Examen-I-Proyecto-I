'use strict'
const entrenadorModel = require('./entrenador.model');

module.exports.registrar = function(req, res) {
    let nuevoEntrenador = new entrenadorModel({
<<<<<<< HEAD
        numeroEntrenador : req.body.numeroEntrenador,
        nombreEntrenador : req.body.nombreEntrenador,
=======
>>>>>>> 5fbd0d80e840a0e76096b583838b3bc9e3548d64
        edad : req.body.edad,
        sexo : req.body.sexo,
        foto : req.body.foto
    });

    nuevoEntrenador.save(function(error){
        if(error){
            res.json({success : false, msg : 'No se pudo registrar el entrenador' + error});
        }else{
            res.json({success : true, msg : 'El entrenador se registró con éxito'});
        }
    });
};

module.exports.listar_todos = function(req, res){
    entrenadorModel.find().sort({nombre : 'asc'}).then(
        function(entrenadores){
            res.send(entrenadores);
        }
    );
};

module.exports.agregar_pokemon = function(req, res){
    
    entrenadorModel.update(
        {_id: req.body._id}, 
        {$push: 
            {'pokemon':
                {
                    numeroPokemon : req.body.numero, 
<<<<<<< HEAD
                    nombrePokemon : req.body.nombre,
                    apodoPokemon : req.body.apodo
=======
                    nombrePokemon : req.body.nombre
>>>>>>> 5fbd0d80e840a0e76096b583838b3bc9e3548d64
                }
            }
        },
        function(error){
            if(error){
                res.json({success : false, msg : 'No se pudo registrar el pokemon, ocurrió el siguiente error' + error});
            }else{
                res.json({success : true, msg : 'El pokemon se registró con éxito'});
            }
        }
    )
};

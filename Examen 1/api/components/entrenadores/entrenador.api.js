'use strict'
const entrenadorModel = require('./entrenador.model');

module.exports.registrar = function(req, res) {
    let nuevoEntrenador = new entrenadorModel({
        numeroEntrenador : req.body.numeroEntrenador,
        nombreEntrenador : req.body.nombreEntrenador,
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
    entrenadorModel.find().sort({numeroEntrenador : 'asc'}).then(
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
                    nombrePokemon : req.body.nombre
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

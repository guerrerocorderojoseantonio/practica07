//Mostrar las carreras que estudian cada alumnos

db.estudiantes.aggregate(
    [
        {
            $lookup: {
                from: "universidades",
                localField: "carrera",
                foreignField: "_id",
                as: "Carrera"
            }
        }
    ]
).pretty()

//Haremos lo mismo pero seleccionando que queremos mostrar 

db.estudiantes.aggregate(
    [
        {
            $lookup: {
                from: "universidades",
                localField: "carrera",
                foreignField: "_id",
                as: "carrera"
            }
        },
        {
            $project: {
                _id: 0,
                nombre: 1,
                email: 1,
                genero: 1,
                "carrera.nombreCarrera":1,
                "carrera.edificio":1 
            }
        }
    ]
).pretty()


//Ahora veremos que estudiantes hay en cada carrera pero desde el punto de vista de las universidades

db.universidades.aggregate(
    [
        {
            $lookup: {
                from: "estudiantes",
                localField: "_id",
                foreignField: "carrera",
                as: "estudiantes"
            }
        },
    ]
).pretty()
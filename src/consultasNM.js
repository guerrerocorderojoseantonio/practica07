//mostrar las peliculas y generos a los qyue perteneces y viceversa

db.peliculas.aggregate(
    [
        {
            $lookup: {
                from: "generos",
                localField: "genero",
                foreignField: "_id",
                as: "genero"
            }
        }
    ]
).pretty()


db.generos.aggregate(
    [
        {
            $lookup: {
                from: "peliculas",
                localField: "_id",
                foreignField: "genero",
                as: "peliculas"
            },
        }
    ]
).pretty()
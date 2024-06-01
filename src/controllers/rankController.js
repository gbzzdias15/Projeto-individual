var rankModel = require("../models/rankModel");

function ranquear(req, res) {
    rankModel.ranquear()
    .then(function(resultado) {
        console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String
        res.status(200).json(resultado);
    }).catch(function(erro) {
        console.log(erro);
        console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    ranquear
}
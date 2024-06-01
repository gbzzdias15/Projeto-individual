var jogoModel = require("../models/jogoModel");

function buscar(req, res) {
    jogoModel.buscar()
        .then(function(resultado) {  
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`); 
                res.status(200).json(resultado)
               
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar a busca! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function inserir(req, res) {
    var tempo = req.body.tempoServer;
    var idUsuario = req.body.idUsuarioServer;
    var vezesJogadas = req.body.jogadasServer;

    if(tempo == undefined) {
        res.status(400).send("Seu tempo está undefined");
        console.log('Seu tempo está undefined')
    } else if(vezesJogadas == undefined){
        res.status(400).send("Sua jogadas estam undefined");
        console.log('Seu  está undefined')
    }
    else if(idUsuario == undefined) {
        res.status(400).send("Seu idUsuário está undefined");
        console.log('Seu idUsuário está undefined')
    }

    jogoModel.inserir(tempo, idUsuario, vezesJogadas)
    .then(function(resposta) {
        res.json(resposta)
        res.status(200).send("Tempo inserido com sucesso");
    }).catch(function(erro) {
        res.status(500).json(erro.sqlMessage);
        console.log(
            "\nHouve um erro ao realizar o insert! Erro: ",
            erro.sqlMessage
        );
    })
}

module.exports = {
    buscar,
    inserir
}
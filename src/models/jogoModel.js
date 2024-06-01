var database = require("../database/config");

function buscar() {
    var instrucaosql = `
    
        select tempo , nome from vezesJogadas join usuario on idUsuario = fkUsuario ;
    `

    console.log("Executando a instrução SQL: \n" + instrucaosql);
    return database.executar(instrucaosql);
}

function inserir(tempo, idUsuario,vezesJogadas) {
    var instrucao = `
        insert into vezesJogadas (idVezes, fkUsuario, fkJogo,vezesJogadas,tempo) values (${vezesJogadas}, ${idUsuario},1, ${vezesJogadas}, ${tempo}); 
    `

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    buscar,
    inserir
}
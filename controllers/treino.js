const db = require('../database/connection'); 

module.exports = {
    async listarTreino(request, response) {
        try {    
            
            const sql =
    `SELECT cod_treino, descricao_treino, objetivo_treino FROM TREiNO; `;
    
    const treino = await db.query(sql);
    const nItens = treino[0].length;


            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de Treino.', 
                dados: treino[0],
                nItens
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
    async cadastrarTreino(request, response) {
        try {    
            
            const{cod_treino, descricao_treino, objetivo_treino} = request.body;
            const sql = `INSERT INTO treino (cod_treino, descricao_treino, objetivo_treino) 
            VALUES (?,?,?)`;
            const values =[ cod_treino, descricao_treino, objetivo_treino];
            const execSql = await db.query(sql, values);
            const usu_id = execSql[0].insertId;

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de Treino.', 
                dados: usu_id
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
    async editarTreino(request, response) {
        try {            

            const{ descricao_treino, objetivo_treino } = request.body;
            const {cod_treino} = request.params;
            const sql =`UPDATE treino SET descricao_treino=?, objetivo_treino=?
            WHERE cod_treino = ? ;`;
            const values=[descricao_treino, objetivo_treino, cod_treino];
            const atualizaDados= await db.query(sql, values);


            return response.status(200).json({
                sucesso: true, 
                mensagem: `Treino ${cod_treino} atualizado com sucesso` , 
                dados: atualizaDados[0].affectedRows
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
   
};  

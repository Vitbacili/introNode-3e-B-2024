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
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de Treino.', 
                dados: null
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
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Editar Treinos.', 
                dados: null
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

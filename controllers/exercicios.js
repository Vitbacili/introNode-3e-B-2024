const db = require('../database/connection'); 

module.exports = {
    async listarExercicios(request, response) {
        try { 
            
            const sql =
    `SELECT cod_exe, nome_exe, descricao_exe, gif_exe FROM EXERCICIO; `;
    
    const Exercicios = await db.query(sql);
    const nItens = Exercicios[0].length;

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de exercicios.', 
                dados: Exercicios[0],
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
    async cadastrarExercicios(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de Exercicios.', 
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
    async editarExercicios(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Editar Exercicios.', 
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

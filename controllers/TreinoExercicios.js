const db = require('../database/connection'); 

module.exports = {
    async listarTreinoExercicios(request, response) {
        try {            


            const sql = `SELECT
             cod_treino, cod_exe, series_te, repeticoes_te 
             
             FROM TREINOEXERCICIOS;` 
             
             const TreinoExercicios = await db.query(sql);
             const nItens = TreinoExercicios[0].length;

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de Treino dos Exercicios.', 
                dados: TreinoExercicios[0],
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
    async cadastrarTreinoExercicios(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de Treinos dos Exercicios.', 
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
    async editarTreinoExercicios(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Editar Treino dos Exercicios.', 
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
    async apagarTreinoExercicios(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Apagar Treinos dos Exercicios.', 
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

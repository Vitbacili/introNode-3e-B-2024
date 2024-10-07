const db = require('../database/connection'); 

module.exports = {
    async listarAlunos(request, response) {
        try {            

            const sql = `SELECT
             cod_plano , cod_aln
             
             FROM ALUNOS;` 
             
             const alunos = await db.query(sql);
             const nItens = alunos[0].length;


            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de alunos.', 
                dados: alunos[0],
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
    async cadastrarAlunos(request, response) {
        try {         
            
            const{ cod_plano, cod_aln} = request.body;
            const sql = ``
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de alunos.', 
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
    async editarAlunos(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Editar alunos.', 
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
    async apagarAlunos(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Apagar alunos.', 
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

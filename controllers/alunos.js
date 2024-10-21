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
            const sql = `INSERT INTO alunos ( cod_plano, cod_aln) 
            VALUES (?,?)`;
            const values =[ cod_plano, cod_aln];
            const exeSql = await db.query(sql, values);
            const usu_id = exeSql[0].insertId;



            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de alunos.', 
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
    async editarAlunos(request, response) {
        try {         

            const{ cod_plano,} = request.body;
            const {cod_aln} = request.params;
            const sql =`UPDATE alunos SET cod_plano = ? 
            WHERE cod_aln = ? ;`;
            const values=[cod_plano,cod_aln];
            const atualizaDados= await db.query(sql, values);


            return response.status(200).json({
                sucesso: true, 
                mensagem: `Aluno ${cod_aln} atualizado com sucesso`, 
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

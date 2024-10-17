const db = require('../database/connection'); 

module.exports = {
    async listarTreinoAluno(request, response) {
        try {            

        const sql =
    `SELECT cod_aln, cod_treino, cod_ta, data_inicio_ta FROM TREINOALUNO;`;
    
    const TreinoAluno = await db.query(sql);
    const nItens = TreinoAluno[0].length;
            
        return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de treino do Aluno.', 
                dados: TreinoAluno[0],
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
    async cadastrarTreinoAluno(request, response) {
        try {     
            
            const{cod_aln, cod_treino, cod_ta, data_inicio_ta} = request.body;
            const sql = `INSERT INTO TreinoAluno (cod_aln, cod_treino, cod_ta, data_inicio_ta) 
            VALUES (?,?,?,?)`;
            const values =[ cod_aln, cod_treino, cod_ta, data_inicio_ta];
            const execSql = await db.query(sql, values);
            const usu_id = execSql[0].insertId;

            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de Treino do Aluno.', 
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
    async editarTreinoAluno(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Editar treino do Aluno.', 
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

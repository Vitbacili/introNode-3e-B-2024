const db = require('../database/connection'); 

module.exports = {
    async listarTreinoUsuarioExercicio(request, response) {
        try {            

            const sql = `SELECT cod_tue, cod_ta, cod_exe, carga_tue, series_tue, repeticoes_tue
            
            FROM TreinoUsuarioExercicio;`
             
             const TreinoUsuarioExercicio = await db.query(sql);
             const nItens = TreinoUsuarioExercicio[0].length;


            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de Treino de Exercicios do Usuario.', 
                dados: TreinoUsuarioExercicio[0],
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
    async cadastrarTreinoUsuarioExercicio(request, response) {
        try {        
            
            const{cod_tue, cod_ta, cod_exe, carga_tue, series_tue, repeticoes_tue} = request.body;
            const sql = `INSERT INTO TreinoUsuarioExercicio (cod_tue, cod_ta, cod_exe, carga_tue, series_tue, repeticoes_tue) 
            VALUES (?,?,?,?,?,?)`;
            const values =[ cod_tue, cod_ta, cod_exe, carga_tue, series_tue, repeticoes_tue];
            const execSql = await db.query(sql, values);
            const usu_id = execSql[0].insertId;


            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de Treino dos Exercicios do Usuario.', 
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
    async editarTreinoUsuarioExercicio(request, response) {
        try {

            const{  cod_ta, cod_exe, carga_tue, series_tue, repeticoes_tue} = request.body;
            const {cod_tue} = request.params;
            const sql =`UPDATE treinousuarioexercicio SET cod_ta=?, cod_exe=?, carga_tue=?, series_tue=?, repeticoes_tue=?
            WHERE cod_tue = ? ;`;
            const values=[cod_ta, cod_exe, carga_tue, series_tue, repeticoes_tue,cod_tue];
            const atualizaDados= await db.query(sql, values);
            
            return response.status(200).json({
                sucesso: true, 
                mensagem: `TreinoUsuarioExercicios ${cod_tue} atualizado com sucesso`, 
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
    async apagarTreinoUsuarioExercicio(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Apagar Treino de Exercicios do Usuario.', 
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

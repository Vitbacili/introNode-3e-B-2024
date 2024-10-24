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
            const{cod_treino, cod_exe, series_te, repeticoes_te} = request.body;
            const sql = `INSERT INTO TreinoExercicios (cod_treino, cod_exe, series_te, repeticoes_te) 
            VALUES (?,?,?,?)`;
            const values =[ cod_treino, cod_exe, series_te, repeticoes_te];
            const execSql = await db.query(sql, values);
            const usu_id = execSql[0].insertId;
    
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de Treinos dos Exercicios.', 
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
    async editarTreinoExercicios(request, response) {
        try {            

            const{ series_te, repeticoes_te} = request.body;
            const {cod_treino, cod_exe} = request.params;
        
            const sql =`UPDATE TreinoExercicios SET series_te=?, repeticoes_te=?
            WHERE cod_treino=? AND cod_exe = ? ;`;
            const values=[series_te, repeticoes_te,cod_treino,cod_exe];
            const atualizaDados= await db.query(sql, values);

            return response.status(200).json({
                sucesso: true, 
                mensagem: `TreinoExercicios ${cod_treino,cod_exe} atualizado com sucesso`, 
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
    async apagarTreinoExercicios(request, response) {
        try {            
            const {cod_treino,cod_exe}=request.params;
            const sql= `DELETE FROM treinoexercicios WHERE cod_treino=? AND cod_exe=?`;
            const values=[cod_treino,cod_exe];
            const excluir = await db.query(sql,values);
  
              return response.status(200).json({
                  sucesso: true, 
                  mensagem: `usuario ${cod_treino,cod_exe} excluido com sucesso `, 
                  dados: excluir[0].affectedRows
            
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

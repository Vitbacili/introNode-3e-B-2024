const db = require('../database/connection'); 

module.exports = {
    async listarPlano(request, response) {
        try {            

            const sql = `SELECT
             cod_plano, descricao_plano, valor_plano, detalhes_plano
             
             FROM PLANO;` 
             
             const plano = await db.query(sql);
             const nItens = plano[0].length;


            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de plano.', 
                dados: plano[0],
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
    async cadastrarPlano(request, response) {
        try {           
            
            const{cod_plano, descricao_plano, valor_plano, detalhes_plano} = request.body;
            const sql = `INSERT INTO plano (cod_plano, descricao_plano, valor_plano, detalhes_plano) 
            VALUES (?,?,?,?)`;
            const values =[ cod_plano, descricao_plano, valor_plano, detalhes_plano];
            const execSql = await db.query(sql, values);
            const usu_id = execSql[0].insertId;



            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de plano.', 
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
    async editarPlano(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Editar plano.', 
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

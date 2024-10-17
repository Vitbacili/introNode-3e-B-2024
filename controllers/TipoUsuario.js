const db = require('../database/connection'); 

module.exports = {
    async listarTipoUsuario(request, response) {
        try {            

            const sql =
    `SELECT cod_tipoUsuario, descricao FROM TipoUsuario;`;
    
    const TipoUsuario = await db.query(sql);
    const nItens = TipoUsuario[0].length;

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de Tipos de Usuario.', 
                dados: TipoUsuario[0],
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
    async cadastrarTipoUsuario(request, response) {
        try {            

            const{ cod_tipoUsuario, descricao} = request.body;
            const sql = `INSERT INTO TipoUsuario ( cod_tipoUsuario, descricao) 
            VALUES (?,?)`;
            const values =[ cod_tipoUsuario, descricao];
            const exeSql = await db.query(sql, values);
            const usu_id = exeSql[0].insertId;


            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de usuários.', 
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
    async editarTipoUsuario(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Editar usuários.', 
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
    async apagarTipoUsuario(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Apagar usuários.', 
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

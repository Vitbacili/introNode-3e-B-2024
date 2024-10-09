const db = require('../database/connection'); 

module.exports = {
    async listarUsuarios(request, response) {
        try {
            const sql = `SELECT
             cod_usu, login_usu, senha_usu, dataCadastro_usu, dataBloqueio_usu,
             cod_tipoUsuario, nome_usu, cpf
             
             FROM USUARIOS;` 
             
             const usuarios = await db.query(sql);
             const nItens = usuarios[0].length;


            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de usuários.', 
                dados: usuarios[0],
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
    async cadastrarUsuarios(request, response) {
        try {       
            
            const{ cod_usu, login_usu, senha_usu, dataCadastro_usu, dataBloqueio_usu, cod_tipoUsuario, nome_usu, cpf} = request.body;
            const sql = `INSERT INTO usuarios (cod_usu, login_usu, senha_usu, dataCadastro_usu, dataBloqueio_usu, cod_tipoUsuario, nome_usu, cpf) 
            VALUES (?,?,?,?,?,?,?,?)`;
            const values =[ cod_usu, login_usu, senha_usu, dataCadastro_usu, dataBloqueio_usu, cod_tipoUsuario, nome_usu, cpf];
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
    async editarUsuarios(request, response) {
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
    async apagarUsuarios(request, response) {
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

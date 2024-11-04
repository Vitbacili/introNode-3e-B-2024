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
            const execSql = await db.query(sql, values);
            const usu_id = execSql[0].insertId;



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
              
            const { login_usu, senha_usu, dataCadastro_usu, dataBloqueio_usu, cod_tipoUsuario, nome_usu, cpf } = request.body;
            const { cod_usu } = request.params;

            const sql = `UPDATE usuarios SET login_usu = ?, senha_usu = ?, dataCadastro_usu = ?, dataBloqueio_usu = ?, 
            cod_tipoUsuario = ?, nome_usu = ?, cpf = ? WHERE cod_usu = ?;`;
            
            const values = [login_usu, senha_usu, dataCadastro_usu, dataBloqueio_usu, cod_tipoUsuario, nome_usu, cpf, cod_usu];
            const atualizaDados = await db.query(sql, values);
            
            return response.status(200).json({
                sucesso: true, 
                mensagem: `Usuário ${cod_usu} atualiazado com sucesso!`, 
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
    async apagarUsuarios(request, response) {
        try {            

          const {cod_usu}=request.params;
          const sql= `DELETE FROM usuarios WHERE cod_usu=?`;
          const values=[cod_usu];
          const excluir = await db.query(sql,values);

            return response.status(200).json({
                sucesso: true, 
                mensagem: `usuario ${cod_usu} excluido com sucesso `, 
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
    async login(request, response) {
        try {
          const { login_usu, senha_usu } = request.body;

          const sql = `SELECT cod_usu, dataCadastro_usu, dataBloqueio_usu, cod_tipoUsuario, nome_usu, cpf FROM usuarios WHERE login_usu = ? AND senha_usu = ? 
          ;`;
          
          const values = [login_usu, senha_usu];

          const usuarios = await db.query(sql, values);
          const nItens = usuarios[0].length;
      
          if (nItens < 1) {
            return response.status(403).json({
              sucesso: false,
              mensagem: 'Login e/ou senha inválido.',
              dados: null,
            });
          }
      
          return response.status(200).json({
            sucesso: true,
            mensagem: 'Login efetuado com sucesso',
            dados: usuarios[0],
          });

        } catch (error) {
          return response.status(500).json({
            sucesso: false,
            mensagem: 'Erro na requisição.',
            dados: error.message
          });
        }
      }
      
};  

const express = require('express'); 
const router = express.Router(); 

// referência a controllers que serão utilizados nas rotas
const UsuariosController = require('../controllers/usuarios'); 
const PlanoController = require('../controllers/plano'); 
// definição das rotas
router.get('/usuarios', UsuariosController.listarUsuarios); 
router.post('/usuarios', UsuariosController.cadastrarUsuarios); 
router.patch('/usuarios', UsuariosController.editarUsuarios); 
router.delete('/usuarios', UsuariosController.apagarUsuarios); 
// post
// patch
// delete


router.get('/plano', PlanoController.listarPlano); 
router.post('/plano', PlanoController.cadastrarPlano); 
router.patch('/plano', PlanoController.editarPlano); 


module.exports = router;

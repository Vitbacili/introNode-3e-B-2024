const express = require('express'); 
const router = express.Router(); 


// referência a controllers que serão utilizados nas rotas
const UsuariosController = require('../controllers/usuarios'); 
const PlanoController = require('../controllers/plano'); 
const AlunosController = require('../controllers/alunos'); 
const ExerciciosController= require('../controllers/exercicios');
const TipoUsuarioController= require('../controllers/TipoUsuario');



// definição das rotas
router.get('/usuarios', UsuariosController.listarUsuarios); 
router.post('/usuarios', UsuariosController.cadastrarUsuarios); 
router.patch('/usuarios', UsuariosController.editarUsuarios); 
router.delete('/usuarios', UsuariosController.apagarUsuarios); 


router.get('/plano', PlanoController.listarPlano); 
router.post('/plano', PlanoController.cadastrarPlano); 
router.patch('/plano', PlanoController.editarPlano); 


router.get('/alunos', AlunosController.listarAlunos); 
router.post('/alunos', AlunosController.cadastrarAlunos); 
router.patch('/alunos', AlunosController.editarAlunos); 
router.delete('/alunos', AlunosController.apagarAlunos); 


router.get('/exercicios', ExerciciosController.listarExercicios); 
router.post('/exercicios', ExerciciosController.cadastrarExercicios); 
router.patch('/exercicios', ExerciciosController.editarExercicios); 

router.get('/TipoUsuario', TipoUsuarioController.listarTipoUsuario); 
router.post('/TipoUsuario', TipoUsuarioController.cadastrarTipoUsuario); 
router.patch('/TipoUsuario', TipoUsuarioController.editarTipoUsuario); 
router.delete('/TipoUsuario', TipoUsuarioController.apagarTipoUsuario); 

module.exports = router;

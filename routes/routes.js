const express = require('express'); 
const router = express.Router(); 


// referência a controllers que serão utilizados nas rotas
const UsuariosController = require('../controllers/usuarios'); 
const PlanoController = require('../controllers/plano'); 
const AlunosController = require('../controllers/alunos'); 
const ExerciciosController = require('../controllers/exercicios');
const TipoUsuarioController = require('../controllers/TipoUsuario');
const TreinoController = require('../controllers/treino');
const TreinoAlunoController = require('../controllers/TreinoAluno');
const TreinoExerciciosController = require('../controllers/TreinoExercicios');
const TreinoUsuarioExercicioController = require('../controllers/TreinoUsuarioExercicio');


// definição das rotas
router.get('/usuarios', UsuariosController.listarUsuarios); 
router.post('/usuarios', UsuariosController.cadastrarUsuarios); 
router.patch('/usuarios/:cod_usu', UsuariosController.editarUsuarios); 
router.delete('/usuarios', UsuariosController.apagarUsuarios); 


router.get('/plano', PlanoController.listarPlano); 
router.post('/plano', PlanoController.cadastrarPlano); 
router.patch('/plano/:cod_plano', PlanoController.editarPlano); 


router.get('/alunos', AlunosController.listarAlunos); 
router.post('/alunos', AlunosController.cadastrarAlunos); 
router.patch('/alunos/:cod_aln', AlunosController.editarAlunos); 
router.delete('/alunos', AlunosController.apagarAlunos); 


router.get('/exercicios', ExerciciosController.listarExercicios); 
router.post('/exercicios', ExerciciosController.cadastrarExercicios); 
router.patch('/exercicios/:cod_exe', ExerciciosController.editarExercicios); 


router.get('/TipoUsuario', TipoUsuarioController.listarTipoUsuario); 
router.post('/TipoUsuario', TipoUsuarioController.cadastrarTipoUsuario); 
router.patch('/TipoUsuario', TipoUsuarioController.editarTipoUsuario); 
router.delete('/TipoUsuario', TipoUsuarioController.apagarTipoUsuario); 


router.get('/treino', TreinoController.listarTreino); 
router.post('/treino', TreinoController.cadastrarTreino); 
router.patch('/treino', TreinoController.editarTreino); 


router.get('/TreinoAluno', TreinoAlunoController.listarTreinoAluno); 
router.post('/TreinoAluno', TreinoAlunoController.cadastrarTreinoAluno); 
router.patch('/TreinoAluno', TreinoAlunoController.editarTreinoAluno); 


router.get('/TreinoExercicios', TreinoExerciciosController.listarTreinoExercicios); 
router.post('/TreinoExercicios', TreinoExerciciosController.cadastrarTreinoExercicios); 
router.patch('/TreinoExercicios', TreinoExerciciosController.editarTreinoExercicios); 
router.delete('/TreinoExercicios', TreinoExerciciosController.apagarTreinoExercicios); 


router.get('/TreinoUsuarioExercicio', TreinoUsuarioExercicioController.listarTreinoUsuarioExercicio); 
router.post('/TreinoUsuarioExercicio', TreinoUsuarioExercicioController.cadastrarTreinoUsuarioExercicio); 
router.patch('/TreinoUsuarioExercicio', TreinoUsuarioExercicioController.editarTreinoUsuarioExercicio); 
router.delete('/TreinoUsuarioExercicio', TreinoUsuarioExercicioController.apagarTreinoUsuarioExercicio); 

module.exports = router;

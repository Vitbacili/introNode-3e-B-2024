-- Inserindo dados na tabela TIPOUSUARIO
INSERT INTO tipousuario (descricao) VALUES 
('Administrador'),
('Instrutor'),
('Aluno');

-- Inserindo dados na tabela USUARIOS
INSERT INTO usuarios (login_usu, senha_usu, dataCadastro_usu, dataBloqueio_usu, cod_tipoUsuario, nome_usu, cpf) VALUES 
('admin', 'senhaAdmin', NOW(), NULL, 1, 'Administrador do Sistema', '123.456.789-00'),
('instrutor1', 'senhaInstrutor1', NOW(), NULL, 2, 'Instrutor 1', '234.567.890-01'),
('aluno1', 'senhaAluno1', NOW(), NULL, 3, 'Aluno 1', '345.678.901-02'),
('aluno2', 'senhaAluno2', NOW(), NULL, 3, 'Aluno 2', '456.789.012-03');

-- Inserindo dados na tabela PLANO
INSERT INTO plano (descricao_plano, valor_plano, detalhes_plano) VALUES 
('Plano Básico', 100.00, 'Acesso a treinos básicos'),
('Plano Avançado', 200.00, 'Acesso a treinos avançados e acompanhamento de personal'),
('Plano Premium', 300.00, 'Acesso total e personal exclusivo');

-- Inserindo dados na tabela ALUNOS
INSERT INTO alunos (cod_plano, cod_aln) VALUES 
(1, 3), -- Aluno 1 no Plano Básico
(2, 4); -- Aluno 2 no Plano Avançado

-- Inserindo dados na tabela EXERCICIO
INSERT INTO exercicio (nome_exe, descricao_exe, gif_exe) VALUES 
('Supino Reto', 'Exercício para peito', 'supino_reto.gif'),
('Agachamento', 'Exercício para pernas', 'agachamento.gif'),
('Rosca Direta', 'Exercício para bíceps', 'rosca_direta.gif');

-- Inserindo dados na tabela TREINO
INSERT INTO treino (descricao_treino, objetivo_treino) VALUES 
('Treino de Peito', 'Hipertrofia de peito'),
('Treino de Pernas', 'Fortalecimento de pernas'),
('Treino de Bíceps', 'Hipertrofia de bíceps');

-- Inserindo dados na tabela TREINOALUNO
INSERT INTO treinoaluno (cod_aln, cod_treino, data_inicio_ta) VALUES 
(3, 1, '2024-01-01'), -- Aluno 1 no Treino de Peito
(4, 2, '2024-01-02'); -- Aluno 2 no Treino de Pernas

-- Inserindo dados na tabela TREINOEXERCICIOS
INSERT INTO treinoexercicios (cod_treino, cod_exe, series_te, repeticoes_te) VALUES 
(1, 1, 4, 12), -- Treino de Peito com Supino Reto
(2, 2, 4, 10), -- Treino de Pernas com Agachamento
(3, 3, 3, 15); -- Treino de Bíceps com Rosca Direta

-- Inserindo dados na tabela TREINOUSUARIOEXERCICIO
INSERT INTO treinousuarioexercicio (cod_ta, cod_exe, carga_tue, series_tue, repeticoes_tue) VALUES 
(1, 1, 60, 4, 12), -- Aluno 1, Supino Reto
(2, 2, 80, 4, 10); -- Aluno 2, Agachamento

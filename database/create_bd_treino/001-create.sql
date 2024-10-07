-- Tabela TIPOUSUARIO
CREATE TABLE tipousuario (
  cod_tipoUsuario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  descricao VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Tabela USUARIOS
CREATE TABLE usuarios (
  cod_usu INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  login_usu VARCHAR(30) NOT NULL,
  senha_usu VARCHAR(30) NOT NULL,
  dataCadastro_usu DATETIME NOT NULL,
  dataBloqueio_usu DATETIME DEFAULT NULL,
  cod_tipoUsuario INT NOT NULL,
  nome_usu VARCHAR(30) NOT NULL,
  cpf CHAR(14) NOT NULL,
  FOREIGN KEY (cod_tipoUsuario) REFERENCES tipousuario (cod_tipoUsuario)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Tabela PLANO
CREATE TABLE plano (
  cod_plano INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  descricao_plano VARCHAR(50) NOT NULL,
  valor_plano DECIMAL(6,2),
  detalhes_plano VARCHAR(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Tabela ALUNOS
CREATE TABLE alunos (
  cod_plano INT NOT NULL,
  cod_aln INT NOT NULL PRIMARY KEY,
  FOREIGN KEY (cod_plano) REFERENCES plano (cod_plano),
  FOREIGN KEY (cod_aln) REFERENCES usuarios (cod_usu)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Tabela EXERCICIO
CREATE TABLE exercicio (
  cod_exe INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nome_exe VARCHAR(20) NOT NULL,
  descricao_exe varchar(128) NOT NULL,
  gif_exe VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Tabela TREINO
CREATE TABLE treino (
  cod_treino INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  descricao_treino VARCHAR(50) NOT NULL,
  objetivo_treino VARCHAR(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Tabela TREINOALUNO
CREATE TABLE treinoaluno (
  cod_aln INT NOT NULL,
  cod_treino INT NOT NULL,
  cod_ta INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  data_inicio_ta DATE NOT NULL,
  FOREIGN KEY (cod_aln) REFERENCES alunos (cod_aln),
  FOREIGN KEY (cod_treino) REFERENCES treino (cod_treino)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Tabela TREINOEXERCICIOS
CREATE TABLE treinoexercicios (
  cod_treino INT NOT NULL,
  cod_exe INT NOT NULL,
  series_te TINYINT NOT NULL,
  repeticoes_te TINYINT NOT NULL,
  PRIMARY KEY (cod_treino, cod_exe),
  FOREIGN KEY (cod_treino) REFERENCES treino (cod_treino),
  FOREIGN KEY (cod_exe) REFERENCES exercicio (cod_exe)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Tabela TREINOUSUARIOEXERCICIO
CREATE TABLE treinousuarioexercicio (
  cod_tue INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  cod_ta INT NOT NULL,
  cod_exe INT NOT NULL,
  carga_tue TINYINT NOT NULL,
  series_tue TINYINT NOT NULL,
  repeticoes_tue TINYINT NOT NULL,
  FOREIGN KEY (cod_ta) REFERENCES treinoaluno (cod_ta),
  FOREIGN KEY (cod_exe) REFERENCES exercicio (cod_exe)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


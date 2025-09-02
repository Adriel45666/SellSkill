CREATE TABLE usuarios (
    id_usuario INT PRIMARY KEY IDENTITY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    tipo VARCHAR(20) CHECK (tipo IN ('aluno', 'fornecedor')) NOT NULL,
    detalhes_empresa TEXT,
    contato VARCHAR(100)
);



-- Tabela de categorias
CREATE TABLE categorias (
    id_categoria INT PRIMARY KEY IDENTITY,
    nome VARCHAR(100) NOT NULL
);

-- Tabela de cursos
CREATE TABLE cursos (
    id_curso INT PRIMARY KEY IDENTITY,
    id_fornecedor INT NOT NULL,
    id_categoria INT,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2),
    duracao VARCHAR(50),
    vagas_disponiveis INT,
    data_criacao DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (id_fornecedor) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria)
);

-- Carrinho
CREATE TABLE carrinho (
    id_carrinho INT PRIMARY KEY IDENTITY,
    id_usuario INT NOT NULL,
    data_criacao DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

-- Itens do carrinho
CREATE TABLE itens_carrinho (
    id_item INT PRIMARY KEY IDENTITY,
    id_carrinho INT NOT NULL,
    id_curso INT NOT NULL,
    FOREIGN KEY (id_carrinho) REFERENCES carrinho(id_carrinho),
    FOREIGN KEY (id_curso) REFERENCES cursos(id_curso)
);

-- Compras
CREATE TABLE compras (
    id_compra INT PRIMARY KEY IDENTITY,
    id_usuario INT NOT NULL,
    data_compra DATETIME DEFAULT GETDATE(),
    status VARCHAR(20) DEFAULT 'concluída',
    metodo_pagamento VARCHAR(50),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

-- Itens das compras
CREATE TABLE itens_compra (
    id_item INT PRIMARY KEY IDENTITY,
    id_compra INT NOT NULL,
    id_curso INT NOT NULL,
    preco_pago DECIMAL(10,2),
    FOREIGN KEY (id_compra) REFERENCES compras(id_compra),
    FOREIGN KEY (id_curso) REFERENCES cursos(id_curso)
);

-- Avaliações
CREATE TABLE avaliacoes (
    id_avaliacao INT PRIMARY KEY IDENTITY,
    id_usuario INT NOT NULL,
    id_curso INT NOT NULL,
    nota INT CHECK (nota BETWEEN 1 AND 5),
    comentario TEXT,
    data_avaliacao DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_curso) REFERENCES cursos(id_curso)
);

-- Curtidas
CREATE TABLE curtidas (
    id_curtida INT PRIMARY KEY IDENTITY,
    id_usuario INT NOT NULL,
    id_curso INT NOT NULL,
    data_curtida DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_curso) REFERENCES cursos(id_curso)
);

-- Comentários
CREATE TABLE comentarios (
    id_comentario INT PRIMARY KEY IDENTITY,
    id_usuario INT NOT NULL,
    id_curso INT NOT NULL,
    texto TEXT,
    data_comentario DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_curso) REFERENCES cursos(id_curso)
);

--CADASTRO DE EMPRESA QUE QUERIA VENDER SEU CURSO--

CREATE TABLE empresas (
    id INT PRIMARY KEY IDENTITY(1,1),
    razao_social VARCHAR(255) NOT NULL,
    nome_fantasia VARCHAR(255),
    cnpj VARCHAR(18) NOT NULL UNIQUE,
    email_corporativo VARCHAR(255) NOT NULL,
    telefone_contato VARCHAR(20),
    rua VARCHAR(255),
    numero VARCHAR(10),
    complemento VARCHAR(100),
    bairro VARCHAR(100),
    cidade VARCHAR(100),
    estado CHAR(2),
    cep VARCHAR(10),
    data_cadastro DATETIME DEFAULT GETDATE()
);
 
 --VIZUALIZAR TODA A TABELA--

SELECT * FROM empresas;

--INSERIR DADOS DE CADASTRO DA EMPRESA--

INSERT INTO empresas (
    razao_social,
    nome_fantasia,
    cnpj,
    email_corporativo,
    telefone_contato,
    rua,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
    cep
)
VALUES (
    'Exemplo Tecnologia LTDA',
    'Tech Cursos',
    '12.345.678/0001-99',
    'contato@techcursos.com.br',
    '(11) 91234-5678',
    'Rua dos Programadores',
    '500',
    'Sala 12B',
    'Centro',
    'São Paulo',
    'SP',
    '01000-000'
);

--ALTERAR NOME FANTASIA--

UPDATE empresas
SET nome_fantasia = 'Novo Nome Fantasia'
WHERE id = 1;

--ALTERAR CNPJ--

UPDATE empresas
SET cnpj = '98.765.432/0001-10'
WHERE id = 1;

--ALTERAR EMAIL--

UPDATE empresas
SET email_corporativo = 'novoemail@empresa.com.br'
WHERE id = 1;

--ALTERAR CONTATO--

UPDATE empresas
SET telefone_contato = '(11) 98888-7777'
WHERE id = 1;

--ALRERAR NOME DA RUA--

UPDATE empresas
SET rua = 'Avenida das Mudanças'
WHERE id = 1;


--ALTERAR NUMERO--

UPDATE empresas
SET numero = '101A'
WHERE id = 1;

--ALTERAR COMPLEMENTO--

UPDATE empresas
SET complemento = 'Bloco B, Sala 2'
WHERE id = 1;

--ALTERAR BAIRRO--

UPDATE empresas
SET bairro = 'Vila Nova'
WHERE id = 1;

--ALTERAR CIDADE--

UPDATE empresas
SET cidade = 'Campinas'
WHERE id = 1;

--ALTERAR ESTADO--

UPDATE empresas
SET estado = 'SP'
WHERE id = 1;

--ALTERAR CEP--

UPDATE empresas
SET cep = '13000-000'
WHERE id = 1;

--ALTERAR DATA DE CADASTRO--

UPDATE empresas
SET data_cadastro = '2025-06-01 10:30:00'
WHERE id = 1;

--CADASTRO DO CURSO DE UMA EMPRESA--




CREATE TABLE empresas (
    id INT PRIMARY KEY IDENTITY(1,1),
    razao_social VARCHAR(255) NOT NULL,
    nome_fantasia VARCHAR(255),
    cnpj VARCHAR(18) NOT NULL UNIQUE,
    email_corporativo VARCHAR(255) NOT NULL,
    telefone_contato VARCHAR(20),
    rua VARCHAR(255),
    numero VARCHAR(10),
    complemento VARCHAR(100),
    bairro VARCHAR(100),
    cidade VARCHAR(100),
    estado CHAR(2),
    cep VARCHAR(10),
    data_cadastro DATETIME DEFAULT GETDATE()
);

CREATE DATABASE minha_plataforma;
GO

USE minha_plataforma;
GO


INSERT INTO empresas (razao_social, nome_fantasia, cnpj, email_corporativo)
VALUES 
('Empresa 1 Ltda', 'Empresa Um', '00.000.000/0001-01', 'contato1@empresa.com'),
('Empresa 2 Ltda', 'Empresa Dois', '00.000.000/0001-02', 'contato2@empresa.com'),
('Empresa 3 Ltda', 'Empresa Três', '00.000.000/0001-03', 'contato3@empresa.com');
GO

CREATE TABLE venda_cursos (
    id INT PRIMARY KEY IDENTITY(1,1),
    empresa_id INT NOT NULL,
    nome_curso VARCHAR(255) NOT NULL,
    descricao TEXT,
    carga_horaria INT,
    valor DECIMAL(10,2) NOT NULL,
    data_criacao DATETIME DEFAULT GETDATE(),
    ativo BIT DEFAULT 1,
    CONSTRAINT FK_empresa FOREIGN KEY (empresa_id) REFERENCES empresas(id)
);
GO

INSERT INTO venda_cursos (empresa_id, nome_curso, descricao, carga_horaria, valor)
VALUES
(1, 'Curso de Gestão Financeira', 'Aprenda a gerenciar finanças empresariais.', 50, 599.90),
(1, 'Curso de Design Gráfico', 'Fundamentos do design para iniciantes.', 40, 399.00),
(1, 'Curso de Desenvolvimento Web', 'HTML, CSS, JavaScript do básico ao avançado.', 70, 799.50);
GO

--CONSULTAR TODOS OS CURSOS--

SELECT * FROM venda_cursos
ORDER BY data_criacao DESC;

--CONSULTAR UM CURSO POR VEZ--

SELECT *
FROM venda_cursos
WHERE id = 5;

--EXCLUIR CURSOS INATIVOS--

DELETE FROM venda_cursos
WHERE ativo = 0;

--CONSULTAR TODOS OS CURSUS ATIVOS DE UMA EMPRESA--

SELECT vc.id, vc.nome_curso, vc.descricao, vc.carga_horaria, vc.valor, vc.data_criacao, vc.ativo,
       e.razao_social, e.nome_fantasia
FROM venda_cursos vc
JOIN empresas e ON vc.empresa_id = e.id
WHERE vc.ativo = 1
ORDER BY vc.data_criacao DESC;

-- ATUALIZAR NOME DO CURSO--

UPDATE venda_cursos
SET nome_curso = 'Curso de Marketing Digital Avançado'
WHERE id = 6;

-- Atualizar descricao
UPDATE venda_cursos
SET descricao = 'Curso completo sobre marketing digital com foco em estratégias avançadas.'
WHERE id = 6;

-- Atualizar carga_horaria
UPDATE venda_cursos
SET carga_horaria = 60
WHERE id = 6


--ATUALIZAR VALOR DO CURSO--

UPDATE venda_cursos
SET valor = 649.90,
    descricao = 'Curso atualizado com mais conteúdo e materiais.'
WHERE id = 6;

-- Atualizar data_criacao
UPDATE venda_cursos
SET data_criacao = '2025-06-12 10:00:00'
WHERE id = 6

-- Atualizar ativo
UPDATE venda_cursos
SET ativo = 1 -- Coloque 1 para ativo, 0 para inativo
WHERE id = 6






-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 15/11/2024 às 00:41
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `ep biblioteca`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `alunos`
--

CREATE TABLE `alunos` (
  `Id` int(11) NOT NULL,
  `Nome` varchar(75) NOT NULL,
  `Endereco` varchar(100) DEFAULT NULL,
  `Telefone` varchar(15) DEFAULT NULL,
  `Curso` varchar(50) NOT NULL,
  `Ano` int(11) NOT NULL,
  `Serie` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `emprestimos`
--

CREATE TABLE `emprestimos` (
  `Id` int(11) NOT NULL,
  `Aluno_id` int(11) DEFAULT NULL,
  `Livro_tombo` int(11) DEFAULT NULL,
  `Data_emprestimo` date DEFAULT NULL,
  `Data_devolucao` date DEFAULT NULL,
  `Status` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `livros`
--

CREATE TABLE `livros` (
  `Tombo` int(11) NOT NULL,
  `Nome` varchar(60) NOT NULL,
  `Autor` varchar(50) NOT NULL,
  `Ano_publicacao` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `monitoria`
--

CREATE TABLE `monitoria` (
  `Id` int(11) NOT NULL,
  `Aluno_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `alunos`
--
ALTER TABLE `alunos`
  ADD PRIMARY KEY (`Id`);

--
-- Índices de tabela `emprestimos`
--
ALTER TABLE `emprestimos`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Aluno_id` (`Aluno_id`),
  ADD KEY `Livro_tombo` (`Livro_tombo`);

--
-- Índices de tabela `livros`
--
ALTER TABLE `livros`
  ADD PRIMARY KEY (`Tombo`);

--
-- Índices de tabela `monitoria`
--
ALTER TABLE `monitoria`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Aluno_id` (`Aluno_id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `alunos`
--
ALTER TABLE `alunos`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `emprestimos`
--
ALTER TABLE `emprestimos`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `livros`
--
ALTER TABLE `livros`
  MODIFY `Tombo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `monitoria`
--
ALTER TABLE `monitoria`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `emprestimos`
--
ALTER TABLE `emprestimos`
  ADD CONSTRAINT `emprestimos_ibfk_1` FOREIGN KEY (`Aluno_id`) REFERENCES `alunos` (`Id`),
  ADD CONSTRAINT `emprestimos_ibfk_2` FOREIGN KEY (`Livro_tombo`) REFERENCES `livros` (`Tombo`);

--
-- Restrições para tabelas `monitoria`
--
ALTER TABLE `monitoria`
  ADD CONSTRAINT `monitoria_ibfk_1` FOREIGN KEY (`Aluno_id`) REFERENCES `alunos` (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

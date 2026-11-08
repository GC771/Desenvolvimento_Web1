<?php
/* Fazer uma conexão rapida com o BD */

# Utilizando o Driver "pdo_mysql" com a classe PDO
$gestor = new PDO("mysql:host=localhost;dbname=bancodeteste;charset=utf8", "root", "");
# $dsn = Data Source Name (Servidor Mysql)
        # mysql :host = localhost;
        # dbname      = Base de Dados;
        # charset     = opção não obrigatoria;
# Usuario = "root" (adminisitrador)
# Senha   = null (sem senha)
# Options = "" null (sem opções)
        
# Uma variável para armazenar os dados da tabela
$dados = $gestor->query("SELECT * FROM fornecedores");

# Criamos uma variavel para conter os dados da tabela
# ASSOC é um formato de arry associativo
$fornecedores = $dados->fetchALL(PDO::FETCH_ASSOC);
# Traz em um formato de vetor "nome" "valor"

# Impressão simples na tela
print_r($fornecedores);

?>
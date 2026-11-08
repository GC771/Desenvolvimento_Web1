<?php
$gestor = new PDO("mysql:host=localhost;dbname=bancodeteste;charset=utf8", "root", "");
$dados = $gestor->query("SELECT * FROM fornecedores");
$fornecedores = $dados->fetchALL(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="widht=device-widht, initial-scale=1.0">
        <title>Aula-14 conexão banco</title>
    </head>
    <body>
        <h3>fornecedores</h3>
        <hr>
        <table>
            <thead>
                <tr>
                    <th>Fornecedor</th>
                    <th>Nome</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach($fornecedores as $fornec): ?>
                    <tr>
                        <td><?=  $fornec["codigo"] ?></td>
                        <td><?=  $fornec["nome"] ?></td>
                        <td><?=  $fornec["email"] ?></td>
                    </tr>
                    <?php endforeach;?>
            </tbody>
        </table>
        <p>Total Fornecedores: <strong> <?= count($fornecedores)?></p>
    </body>
</html>
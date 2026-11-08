<?php
require 'conexao.php';

// Recebe os dados JSON vindos do front-end
$dados = json_decode(file_get_contents("php://input"), true);

if ($dados) {
    try {
        $query = "INSERT INTO orcamentos (nome_cliente, email_cliente, plano_base, valor_plano, servicos_adicionais, valor_adicionais, desconto_aplicado, valor_final) 
                  VALUES (:nome, :email, :plano_base, :valor_plano, :servicos_ad, :valor_ad, :desconto, :valor_final)";
        
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':nome', $dados['nome']);
        $stmt->bindParam(':email', $dados['email']);
        $stmt->bindParam(':plano_base', $dados['plano_base']);
        $stmt->bindParam(':valor_plano', $dados['valor_plano']);
        $stmt->bindParam(':servicos_ad', $dados['servicos_adicionais']);
        $stmt->bindParam(':valor_ad', $dados['valor_adicionais']);
        $stmt->bindParam(':desconto', $dados['desconto']);
        $stmt->bindParam(':valor_final', $dados['valor_final']);
        
        $stmt->execute();
        
        echo json_encode(["status" => "sucesso", "mensagem" => "Orçamento salvo com sucesso!"]);
    } catch(PDOException $e) {
        echo json_encode(["status" => "erro", "mensagem" => "Erro ao salvar: " . $e->getMessage()]);
    }
}
?>
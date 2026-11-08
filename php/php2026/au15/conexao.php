<?php
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "bd_orcamentos";

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $user, $pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $err) {
    die("Erro de conexão: " . $err->getMessage());
}
?>
<?php
    $email = $_POST['email'];
    $nome = $_POST['nome'];

    $nomecorreto = "Mariagdalena";
    $emailcorreto = "mariagdalena@gmail.com";
    
    if ($nome == $nomecorreto && $email == $emailcorreto):
        echo "Saudações $nome seu E-mail : $email esta correto, seja bem vinda.";
    else:
        echo "Dados invalidos!" ;
    endif;
    
?>
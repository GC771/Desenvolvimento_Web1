<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de Alunos</title>
</head>
<body>
    <h1>Portal do Aluno - Novo Cadastro</h1>
    <hr>
    
    <form action="logica.php" method="POST">
        <label for="nome">Nome Completo:</label><br>
        <input type="text" id="nome" name="nome" placeholder="Digite seu nome"><br><br>
        
        <label for="email">E-mail Institucional:</label><br>
        <input type="email" id="email" name="email" placeholder="aluno@fatec.sp.gov.br"><br><br>
        
        <label>Selecione o Turno de Estudo:</label><br><br>
        <input type="radio" id="turnoManha" name="turno" value="manha" required>
        <label for="turnoManha">Manhã</label><br>
        <input type="radio" id="turnoNoite" name="turno" value="noite" required>
        <label for="turnoNoite">Noite</label><br><br>
        
        <label for="cursoSelecionado">Curso de Interesse:</label><br>
        <select id="cursoSelecionado" name="curso" required>
            <option value="">-- Selecione um curso --</option>
            <option value="ads">Análise e Desenvolvimento de Sistemas</option>
            <option value="dsm">Desenvolvimento Multiplataforma</option>
            <option value="comex">Comércio Exterior</option>
            <option value="ge">Gestão Empresarial</option>
        </select><br><br><br>
        
        <button type="submit">Finalizar Cadastro</button>
    </form>
</body>
</html>
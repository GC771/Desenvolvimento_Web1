<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Agência Digital</title>
</head>

<body>

    <div class="main">
        <h1>Orçamento de Serviço</h1>

        <form action="">
        <div class="form-group">
            <label for="nome">Insira seu nome:</label> <br> 
            <input type="text" id="nome" placeholder="Fulano Cicrano" required>
        </div>
        <br> 
        <div class="form-group">
            <label for="email">Insira seu e-mail:</label> <br> 
             <input type="email" id="email" placeholder="fulanocicrano@gmail.com" required>
        </div>

       <br> 
       <div class="form-group">
       <label for="plano">Escolha um plano:</label> <br>
        <select name="" id="plano">
            <option value="800">Plano Básico: R$: 800,00</option>
            <option value="1200">Plano Profissional: R$: 1200,00</option>
            <option value="2000">Plano Premium: R$: 2000,00</option>
        </select>
    </div>
        <br> 

        <div class="form-group checkbox-group">
           
            <input type="checkbox" name="otimizacaoSEO" placeholder="SEO" id="otimizacaoSEO" value="300">
            <label for="otimizacaoSEO">Otimização SEO</label>
        </div>
        <div class="form-group checkbox-group">
            <input type="checkbox" name="gestaoDeRedes" id="gestaoDeRedes" value="400">
            <label for="gestaoDeRedes">Gestão de redes</label>
        </div>
        <br>
        </form>
        <button class="concluir" onclick="concluir()">Concluir</button>
         <div id="mensagem"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>
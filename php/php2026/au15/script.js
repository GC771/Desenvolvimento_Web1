function limparResultado(){
    let divMensagem = document.getElementById('mensagem');
    divMensagem.innerHTML = '';
    divMensagem.style.backgroundColor= 'transparent';
}

// Alterando para async para permitir requisição assíncrona (Fetch API)
async function concluir(){
    // Evita o recarregamento automático do form
    event.preventDefault(); 

    const nomeCliente = document.getElementById('nome').value;
    const emailCliente = document.getElementById('email').value;
    
    if (nomeCliente.trim() === "" || emailCliente.trim() === ""){
        alert("Favor preencher nome e e-mail para calcular seu orçamento!!");
        return;
    } 
    
    const selectPlano = document.getElementById('plano');
    const valorPlano = parseFloat(selectPlano.value);
    const textoPlano = selectPlano.options[selectPlano.selectedIndex].text;
    
    const seoCheckbox = document.getElementById("otimizacaoSEO");
    const redesCheckbox = document.getElementById("gestaoDeRedes");
    
    let totalServicos = 0;
    let nomesServicos = [];
    
    if (seoCheckbox.checked) {
        totalServicos += parseFloat(seoCheckbox.value);
        nomesServicos.push("Otimização SEO");
    }
    
    if (redesCheckbox.checked) {
        totalServicos += parseFloat(redesCheckbox.value);
        nomesServicos.push("Gestão de redes");
    }
    
    let valorBruto = valorPlano + totalServicos;
    let desconto = 0;
    let mensagemDesconto = "";
    
    // Regra de negócio: orçamentos > 1500 recebem 10% de desconto
    if (valorBruto > 1500){
        desconto = valorBruto * 0.10;
        valorBruto = valorBruto - desconto;
        mensagemDesconto = "<br><span style='color: #27ae60; font-weight: bold;'>Um desconto automático de 10% foi aplicado!</span>";
    }
    
    // Exibição do orçamento na tela via DOM
    const divMensagem = document.getElementById('mensagem');
    divMensagem.innerHTML = `
        <p>Olá, <strong>${nomeCliente}</strong>!</p>
        <p>O valor final do seu orçamento ficou em: <strong style='font-size: 1.2em;'>R$ ${valorBruto.toFixed(2)}</strong>.</p>
        ${mensagemDesconto}
    `;
    divMensagem.style.backgroundColor = "#e8f8f5";
    divMensagem.style.border = "1px solid #1abc9c";
    divMensagem.style.borderRadius = "10px";
    divMensagem.style.marginTop = "10px";
    divMensagem.style.padding = "10px";

    // Preparação dos dados para persistência no banco
    const dadosOrcamento = {
        nome: nomeCliente,
        email: emailCliente,
        plano_base: textoPlano,
        valor_plano: valorPlano,
        servicos_adicionais: nomesServicos.join(", "),
        valor_adicionais: totalServicos,
        desconto: desconto,
        valor_final: valorBruto
    };

    // Envio para o Back-end (PHP)
    try {
        const response = await fetch('salvar_orcamento.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosOrcamento)
        });
        const result = await response.json();
        console.log("Status do Servidor:", result.mensagem);
    } catch (error) {
        console.error("Erro ao salvar no banco:", error);
    }
}
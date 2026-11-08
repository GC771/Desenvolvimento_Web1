function limparResultado(){
    let divMensagem = document.getElementById('mensagem');
    divMensagem.innerHTML = '';
    divMensagem.style.backgroundColor= 'transparent';
}

function concluir(){
    const nomeCliente = document.getElementById('nome').value;
    const emailCliente = document.getElementById('email').value;
    
    if (nomeCliente.trim() === "" || emailCliente.trim() === ""){
        alert("Favor preencher nome e e-mail para calcular seu orçamento!!");
        return;
    } 
    
    const valorPlano = parseFloat(document.getElementById('plano').value);
    
    const seoCheckbox = document.getElementById("otimizacaoSEO");
    const redesCheckbox = document.getElementById("gestaoDeRedes");
    
    let totalServicos = 0;
    
    if (seoCheckbox.checked) {
        totalServicos += parseFloat(seoCheckbox.value);
    }
    
    if (redesCheckbox.checked) {
        totalServicos += parseFloat(redesCheckbox.value);
    }
    
    let valorBruto = valorPlano + totalServicos;
    let mensagemDesconto = "";
    
    if (valorBruto > 1500){
        const desconto = valorBruto * 0.10;
        valorBruto = valorBruto - desconto;
        mensagemDesconto = "<br><span style='color: #27ae60; font-weight: bold;'>Um desconto automático de 10% foi aplicado ao seu orçamento!</span>";
    }
    
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


}




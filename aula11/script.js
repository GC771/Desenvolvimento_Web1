// Função principal acionada pelo clique do botão
function processarSaque() {
    // Referências aos elementos do DOM
    const campoErro = document.getElementById('mensagemErro');
    const campoResultado = document.getElementById('resultadoSaque');
    const campoAuditoria = document.getElementById('painelAuditoria');

    // Limpa mensagens anteriores
    campoErro.style.display = 'none';
    campoResultado.style.display = 'none';
    campoAuditoria.style.display = 'none';
    campoErro.innerHTML = '';
    campoResultado.innerHTML = '';
    campoAuditoria.innerHTML = '';

    // a) Obtém o valor e converte para inteiro
    let valorDigitado = document.getElementById('valorSaque').value;
    let valorSolicitado = parseInt(valorDigitado);

    // b) Validação composta (if...else)
    // Verifica se é número válido, estritamente positivo e múltiplo de 10
    if (isNaN(valorSolicitado) || valorSolicitado <= 0 || valorSolicitado % 10 !== 0) {
        campoErro.innerHTML = `<strong>Erro na Operação!</strong><br>O valor digitado (${valorDigitado}) é inválido.<br>Por favor, insira um valor positivo e múltiplo de R$ 10 (ex: 20, 50, 100).`;
        campoErro.style.display = 'block';
        return; // Aborta a execução da função
    }

    // c) Operador ternário para categorização
    let categoriaOperacao = (valorSolicitado >= 500) ? "Operação de Alto Valor" : "Operação Padrão";

    // Variáveis para a contagem e distribuição das notas
    let valorRestante = valorSolicitado;
    let notas100 = 0, notas50 = 0, notas20 = 0, notas10 = 0;
    
    // Variável de controle para o switch-case dentro do while
    let cedulaAnalisada = 100;

    // d) Laço while e switch-case para distribuição de notas
    while (valorRestante > 0) {
        switch (cedulaAnalisada) {
            case 100:
                if (valorRestante >= 100) {
                    notas100++;
                    valorRestante -= 100;
                } else {
                    cedulaAnalisada = 50; // Passa para a próxima nota
                }
                break;
            case 50:
                if (valorRestante >= 50) {
                    notas50++;
                    valorRestante -= 50;
                } else {
                    cedulaAnalisada = 20;
                }
                break;
            case 20:
                if (valorRestante >= 20) {
                    notas20++;
                    valorRestante -= 20;
                } else {
                    cedulaAnalisada = 10;
                }
                break;
            case 10:
                if (valorRestante >= 10) {
                    notas10++;
                    valorRestante -= 10;
                }
                // Como validamos que é múltiplo de 10, o resto será 0 aqui
                break;
        }
    }

    // e) Impressão do resumo atualizando o conteúdo via innerHTML
    let htmlResultado = `<strong>Saque Realizado com Sucesso!</strong><br>`;
    htmlResultado += `<em>Categoria: ${categoriaOperacao}</em><br><br>`;
    htmlResultado += `Valor Total: R$ ${valorSolicitado},00<br><br>`;
    htmlResultado += `<strong>Cédulas Dispensadas:</strong><br>`;
    if (notas100 > 0) htmlResultado += `- ${notas100} nota(s) de R$ 100<br>`;
    if (notas50 > 0) htmlResultado += `- ${notas50} nota(s) de R$ 50<br>`;
    if (notas20 > 0) htmlResultado += `- ${notas20} nota(s) de R$ 20<br>`;
    if (notas10 > 0) htmlResultado += `- ${notas10} nota(s) de R$ 10<br>`;

    campoResultado.innerHTML = htmlResultado;
    campoResultado.style.display = 'block';

    // f) Simulação de auditoria com laço for, continue e break
    // Array simulando 5 requisições aleatórias em uma auditoria do sistema
    let filaRequisicoes = ["Aprovada", "Vazia/Cancelada", "Aprovada", "Erro-Crítico-007", "Aprovada"];
    
    let htmlAuditoria = `<h3>Auditoria do Sistema (Últimas 5 Requisições)</h3><ul>`;

    for (let i = 0; i < filaRequisicoes.length; i++) {
        let status = filaRequisicoes[i];

        // Se a transação for vazia/cancelada, salta (não registra na tela)
        if (status === "Vazia/Cancelada") {
            continue; 
        }

        // Se encontrar um erro crítico, interrompe a varredura inteira
        if (status === "Erro-Crítico-007") {
            htmlAuditoria += `<li style="color: var(--cor-erro);">>> Varredura de auditoria interrompida devido a falha de segurança (Erro-007).</li>`;
            break; 
        }

        htmlAuditoria += `<li>Transação #${i + 1}: Status ${status}</li>`;
    }
    
    htmlAuditoria += `</ul>`;
    
    campoAuditoria.innerHTML = htmlAuditoria;
    campoAuditoria.style.display = 'block';
}
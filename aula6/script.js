// Função principal acionada pelo clique do botão
function realizarReserva() {
    // 1. Declaração da constante para o prazo e da variável booleana para autorização
    const prazoDevolucao = 7; 
    let reservaAutorizada = true; 

    // 2. Extrai o nome do aluno buscando o elemento pelo seu ID e lendo a propriedade .value
    let nomeAluno = document.getElementById('nomeSolicitante').value;

    // Validação simples para não continuar se o nome estiver vazio
    if (nomeAluno.trim() === "") {
        alert("Por favor, digite o nome do aluno.");
        return; 
    }

    // 3. Aciona o comando nativo prompt() para pedir o nome do equipamento
    let nomeEquipamento = prompt("Qual equipamento deseja reservar? (ex: Arduino, Multímetro, Notebook)");

    // Verifica se o usuário cancelou o prompt
    if (nomeEquipamento === null || nomeEquipamento.trim() === "") {
        alert("Reserva cancelada. É necessário informar um equipamento.");
        return;
    }

    // 4. Imprime silenciosamente os valores na aba do desenvolvedor utilizando console.log()
    console.log("=== Registro do Sistema (Log) ===");
    console.log("Aluno:", nomeAluno);
    console.log("Equipamento Solicitado:", nomeEquipamento);
    console.log("Prazo (dias):", prazoDevolucao);
    console.log("Reserva Autorizada:", reservaAutorizada);

    // 5. Interrompe a tela com uma rápida mensagem de confirmação através do alert()
    alert("Processando a sua solicitação no sistema do laboratório...");

    // 6. Injeta o texto manipulando o corpo da página dinamicamente através da propriedade .innerHTML
    let divRecibo = document.getElementById('recibo');
    divRecibo.style.display = "block"; // Altera o display do CSS para exibir a caixa
    
    divRecibo.innerHTML = `
        <h3>Recibo de Empréstimo</h3>
        <p><strong>Solicitante:</strong> ${nomeAluno}</p>
        <p><strong>Item:</strong> ${nomeEquipamento}</p>
        <p><strong>Prazo Máximo:</strong> ${prazoDevolucao} dias</p>
        <p><strong>Status do Sistema:</strong> ${reservaAutorizada ? "Autorizado" : "Pendente"}</p>
    `;
}
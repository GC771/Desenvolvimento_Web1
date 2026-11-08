// Função para limpar o resultado anterior na tela
function limparResultado() {
let divResultado = document.getElementById('resultado');
divResultado.innerHTML = '';
divResultado.style.backgroundColor = 'transparent';
}

// Função para retornar a cor original do botão após a saída do mouse
function restaurarCorBotao(botao) {
botao.style.backgroundColor = ''; // Remove estilo inline, voltando ao CSS original
}

// Função principal de cálculo
function validarRisco() {
// 1. Capturando os valores e convertendo para inteiros
let severidade = parseInt(document.getElementById('severidade').value);
let probabilidade = parseInt(document.getElementById('probabilidade').value);

// 2. Capturando o estado da caixa de seleção (retorna booleano)
let possuiTreinamento = document.getElementById('treinamento').checked;

let divResultado = document.getElementById('resultado');

// Validação básica para garantir que os números foram preenchidos
if (isNaN(severidade) || isNaN(probabilidade)) {
divResultado.innerHTML = 'Por favor, informe a Severidade e a Probabilidade.';
divResultado.style.color = 'black';
return;
}

// 3. Aplicando operador aritmético de multiplicação para o Fator de Risco
let fatorRisco = severidade * probabilidade;

// 4. Estrutura condicional combinando > (maior que), || (OU) e ! (negação)
if (fatorRisco > 15 || !possuiTreinamento) {
divResultado.innerHTML = 'Acesso Bloqueado! Fator de Risco: ' + fatorRisco;
divResultado.style.color = 'red';
divResultado.style.backgroundColor = '#ffe6e6'; // Fundo avermelhado
} else {
divResultado.innerHTML = 'Acesso Liberado. Fator de Risco: ' + fatorRisco;
divResultado.style.color = 'green';
divResultado.style.backgroundColor = '#e6ffe6'; // Fundo esverdeado
}

// Alteração temporária de cor no botão ao clicar (para demonstrar o onmouseout funcionando depois)
let botao = document.getElementById('btnValidar');
botao.style.backgroundColor = '#002244';
}
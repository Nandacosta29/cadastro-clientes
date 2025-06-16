/* 
1. Gerar um número aleatório entre 1 e 100 utilizando Math.random() e armazenar em uma variável.
2. Definir o número máximo de tentativas (ex.: 10 tentativas).
3. Inicializar o contador de tentativas.
4. Ao clicar no botão "Chutar", executar os seguintes passos:
4.1 Capturar o valor inserido no input (palpite do jogador) e converter para número (parseInt()).
4.2 Validar se o palpite é um número válido entre 1 e 100:
Se for inválido (menor que 1, maior que 100 ou não numérico), exibir uma mensagem de erro.
4.3 Comparar o palpite com o número secreto:
✅ Se acertou, exibir a mensagem "Você acertou!" e finalizar o jogo (desabilitar input e botão).
🔼 Se o palpite for menor que o número secreto, exibir a dica "O número secreto é maior.".
🔽 Se o palpite for maior que o número secreto, exibir a dica "O número secreto é menor.".
4.4 Decrementar o contador de tentativas.
4.5 Exibir o número de tentativas restantes.
Se as tentativas chegarem a zero, finalizar o jogo e exibir a mensagem:
"Você perdeu! O número secreto era X."
Desabilitar o campo de input e o botão quando o jogo terminar (por acerto ou fim das tentativas).
*/
// Gerar número aleatório entre 1 e 100 
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
const maxTentativas = 10;
let tentativasRestantes = maxTentativas; 

// Função que executa quando o botão é clicado
function chutar() {
    const input = document.getElementById("palpite");
    const palpite = parseInt(input.value);


    const mensagem = document.getElementById("mensagem");
    const tentativas = document.getElementById("tentativas");

     // Validação do palpite
     if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        mensagem.innerText = "Digite um número válido entre 1 e 100.";
        return;
    }

    tentativasRestantes--;

    if (palpite === numeroSecreto) {
        mensagem.innerText = "🎉 Você acertou! Parabéns!";
        tentativas.innerText = "";
        desabilitarJogo();
    } else if (tentativasRestantes === 0) {
        mensagem.innerText = `❌ Você perdeu! O número secreto era ${numeroSecreto}.`;
        tentativas.innerText = "";
        desabilitarJogo();
    } else if (palpite < numeroSecreto) {
        mensagem.innerText = "🔼 O número secreto é maior.";
        tentativas.innerText = `Tentativas restantes: ${tentativasRestantes}`;
    } else {
        mensagem.innerText = "🔽 O número secreto é menor.";
        tentativas.innerText = `Tentativas restantes: ${tentativasRestantes}`;
    }

    input.value = "";
    input.focus();
}

// Função para desabilitar o input e o botão após o fim do jogo
function desabilitarJogo() {
    document.getElementById("palpite").disabled = true;
    document.querySelector("button").disabled = true;
}






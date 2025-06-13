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

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
const maxTentativas = 10;
let tentativasRestantes = maxTentativas; 

function chutar() {
    const input = document.getElementById("palpite");
    const palpite = parseInt(input.value);

    const mensagem = document.getElementById("mensagem");
    const tentativas = document.getElementById("tentativas");




}

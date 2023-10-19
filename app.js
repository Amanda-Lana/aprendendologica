alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() *numeroMaximo + 1);
console.log(numeroSecreto)
let nome = prompt('Qual seu nome');
let chute;
let tentativas = 1;

//enquanto o chute não for igual ao ns
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre e ${numeroMaximo}`);
    // se um chute for igal ao números secreto 
    if (chute == numeroSecreto) {
        //se acertar de primeira deve-se parar o if, usa-se o break
            } else {
        if (chute < numeroSecreto) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
        //tenattivas = tenattivas + 1; ++(somo 1)
        tentativas ++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`isso ai ${nome}! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`)

//if (tentativas > 1) {
//  alert(`isso ai ${nome}! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`); } else {
//   alert(`isso ai ${nome}! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`)
// } PODE-SE SUBSTITUIR ESSAS LINHAS DE CÓDIGO POR UMA UNICA SENTENÇA - VER LINHA 25 operador ternário


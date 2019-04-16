// TENTATIVAS=3
// ENQUANTO TENTATIVAS > 0
// PEDIR SENHA
// SE SENHA CORRETA
//   APROVADO
// SE NÃO
//   REPROVADO -1 TENTATIVA

let senha= 1234
let tentativas = 10;
// ENQUANTO TENTATIVAS FOR  MENOR QUE  0
while (tentativas>0){

  // PEDIR SENHA
  let senhaEntrada = prompt("Digite sua senha");

  // SE SENHA DIGITADA FOR IGUAL SENHA CADASTRADA
  if(senhaEntrada==senha){
    alert("Aprovado");
    tentativas = 0;
  }

  // SE NÃO
  else{
    alert("Reprovado");
    
    // DIMINUI AS TENTATIVAS
    tentativas --;
  }
}



// let senhaCadastrada = "aviao123";
// let senhaEntrada = prompt("Digite a sua senha: ");
// let limiteDiario = 500;

// if(senhaCadastrada===senhaEntrada){
//     let saldo=1000;
//     let vlrSaque=prompt("Qual o valor do saque?");
  
//     if((vlrSaque<saldo) && (vlrSaque<=limiteDiario)){
//         alert("Saque aprovado");
//     }
//     else if(vlrSaque==saldo){
//         alert("Saque aprovado, mas seu saldo é R$0,00")
//     }
//     else{
//         alert("Saldo insulficiente");
//     }
// }
// else{
//     alert("Senha incorreta");
// }
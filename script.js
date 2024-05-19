const prompt = require("prompt-sync")({ sigint: true });
/*---------------------------------Variáveis definidas ------------------------ */
const jogador = prompt("Digite seu nome para começarmos o jogo: ");
let carteira = parseFloat(
  prompt(
    `Seja bem vindo ao Quiz do Tigrinho ${jogador}. Para jogar insira o valor minimo de R$10,00  `
  )
);
let categoria = 0;
let pontuacao = 0;
let sair = "";
/*---------------------------------- Funções de Validação ------------------- */
function validaResposta() {
  console.log(
    `Uaaau você esta indo bem ${jogador} resposta correta. Foi adicionado a sua carteira mais R$3,00`
  );
  console.log(`Seu saldo é ${(carteira += 3)}`);
  pontuacao++;
}

function invalidaResposta() {
  console.log(`OOOh não!! Essa estava fácil heim!! Passou perto.`);
  console.log(`Seu saldo é ${(carteira -= 5)}`);
}

function validaSaldo() {
  if (carteira > 10.0) {
    console.log(`Ok ${jogador} vamos jogar!! Prepare-se`);
  } else {
    console.log(`Saldo insuficiente!!!`);
    let inserirSaldo = prompt("Deseja inserir saldo? ");
    if (inserirSaldo === "S" || inserirSaldo === "s") {
      let novoSaldo = parseFloat(
        prompt("Digite o valor desejado que seja a partir de R$10. ")
      );
      carteira = carteira + novoSaldo;
    } else {
      console.log(`Obrigado ${jogador} até a proxima!!`);
    }
  }
}
/*-----------------------------------Funções de categoria ------------------------------ */
function anime() {
  let resposta = prompt(
    "O vilão final das 12 casas em os Cavaleiros do Zodiaco na verdade era Saga de Gemeos? Verdadeiro ou falso"
  );
  if (resposta.toLowerCase() === "verdadeiro") {
    validaResposta();
  } else {
    invalidaResposta();
  }

  resposta = prompt(
    "Tanjiro Kamado é o nome do personagem principal do anime Jujutsu Kaisen? Verdadeiro ou falso?"
  );
  if (resposta.toLowerCase() === "falso") {
    validaResposta();
  } else {
    invalidaResposta();
  }

  resposta = prompt(
    "Em Dragonball Z, Goku foi o primeiro personagem da obra a se transformar no Lendário Super Sayaji? Verdadeiro ou Falso"
  );
  if (resposta.toLowerCase() === "verdadeiro") {
    validaResposta();
  } else {
    invalidaResposta();
  }
}

function programacao() {
  let resposta = prompt(
    "Javascript é uma linguagem de Programação fortemente tipada ?: Verdadeiro ou Falso"
  );
  if (resposta.toLowerCase() === "falso") {
    validaResposta();
  } else {
    invalidaResposta();
  }

  resposta = prompt(
    "Operadores condicionais servem para apontar decisões tomadas no código? Verdadeiro ou Falso? "
  );
  if (resposta.toLowerCase() === "verdadeiro") {
    validaResposta();
  } else {
    invalidaResposta();
  }

  resposta = prompt(
    "Funções são blocos de códigos que podem ser executados evitando redundancias? Verdadeiro ou Falso?"
  );
  if (resposta.toLowerCase() === "verdadeiro") {
    validaResposta();
  } else {
    invalidaResposta();
  }
}

/* --------------------------- Execução ------------------------ */

validaSaldo();

while (carteira > 10.0) {
  categoria = parseInt(
    prompt(`Olá ${jogador} escolha sua categoria:  1- Animes... 2- Programação`)
  );

  switch (categoria) {
    case 1:
      anime();
      if (pontuacao > 2) {
        console.log(
          `Uhuuuuuuul !!! ${jogador} você foi fera !! Sua pontuação foi: ${pontuacao} `
        );
        console.log(`Sua pontuação é: ${pontuacao}`);

        break;
      } else {
        console.log(`Oh não!! Tenta de novo!! Vc estará mais preparado `);
        console.log(`Sua pontuação é: ${pontuacao}`);
        break;
      }
    case 2:
      programacao();
      if (pontuacao > 2) {
        console.log(
          `Uhuuuuuuul !!! ${jogador} você foi fera !! Sua pontuação foi: ${pontuacao} `
        );
        console.log(`Sua pontuação é: ${pontuacao}`);

        break;
      } else {
        console.log(`Oh não!! Tenta de novo!! Vc estará mais preparado `);
        console.log(`Sua pontuação é: ${pontuacao}`);
        break;
      }
    case 0:
      break;

    default:
      console.log("Opção inválida");
      break;
  }
  sair = prompt(`${jogador} deseja sair do jogo? `);
  if (sair === "s" || sair === "S") {
    break;
  }
}

console.log("Obrigado por participar!!!");
console.log(`Seu saldo atual é ${carteira}`);

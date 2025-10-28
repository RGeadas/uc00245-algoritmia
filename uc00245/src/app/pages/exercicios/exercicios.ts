import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicios',
  imports: [],
  templateUrl: './exercicios.html',
  styleUrl: './exercicios.css',
})
export class Exercicios implements OnInit {
  ngOnInit(): void {
    this.exercicio1();
    this.exercicio2();
    this.exercicio3();
    this.exercicio4();
    this.exercicio5();
    this.exercicio6();
    this.exercicio7();
    this.exercicio8();
    this.exercicio9();
    this.exercicio10();
    this.exercicio11();
    this.exercicio12();
  }
  /****************************** Exercicios ******************************/
  // ======================================================
  // 🔹 Exercicios Aula 01
  // ======================================================

  exercicio1 = () => {
    // 💪 Exercício 1
    console.log(
      '👉 Exercício 1: Declare 3 variáveis: nome (string), idade (number) e ativo (boolean). Mostre-as no console.'
    );

    let nome: string = 'Ruben Geadas';
    let idade: number = 32;
    const ativo: boolean = true;

    console.log('O', nome, 'tem', idade, 'e atualmente o estado dele é', ativo);
  };

  exercicio2 = () => {
    // 💪 Exercício 2
    console.log('👉 Exercício 2: Crie uma variável cidade e depois altere seu valor.');

    let cidade: string = 'Lisboa';

    console.log('A cidade inicial foi:', cidade);

    cidade = 'Dublin';

    console.log('A segunda cidade foi:', cidade);
  };

  exercicio3 = () => {
    // 💪 Exercício 3
    console.log('👉 Exercício 3: Crie uma variável do tipo any e mude seu tipo três vezes.');

    let variavel: any = 23;

    console.log('O meu numero preferido é', variavel);

    variavel = 'Simba';

    console.log('O nome do meu gato é', variavel);

    variavel = false;

    console.log('É', variavel, 'que o céu é vermelho');
  };

  exercicio4 = () => {
    // 💪 Exercício 4
    console.log(
      '👉 Exercício 4: Crie duas variáveis e mostre no console a soma e subtração delas.'
    );

    let num1 = 10;
    let num2 = 5;

    console.log('Soma:', num1 + num2);
    console.log('Subtração:', num1 - num2);
  };

  exercicio5 = () => {
    // 💪 Exercício 5
    console.log('👉 Exercício 5: Calcule a área de um retângulo (largura * altura).');

    let largura = 15;
    let altura = 5;
    let retangulo: number = largura * altura;

    console.log('A área do retangulo é:', retangulo);
  };

  exercicio6 = () => {
    // 💪 Exercício 6
    console.log('👉 Exercício 6: Mostre o resto da divisão de 20 por 6.');

    let num1 = 20;
    let num2 = 6;

    console.log('O resto da divisão de 20 por 6 é', num1 % num2);
  };

  // continuação operadores compraração
  exercicio7 = () => {
    // 💪 Exercício 7
    console.log('👉 Exercício 7: Compare dois números e diga se são iguais.');

    let num1 = 5;
    let num2 = 10;

    if (num1 == num2) {
      console.log('Os números são iguais');
    } else {
      console.log('Os números são diferentes');
    }
  };

  exercicio8 = () => {
    // 💪 Exercício 8
    console.log('👉 Exercício 8: Compare se um número é maior que o outro.');

    let num1 = 10;
    let num2 = 5;

    if (num1 > num2) {
      console.log('O primeiro número', num1, 'é maior que o segundo número', num2);
    } else if (num1 < num2) {
      console.log('O primeiro número', num1, 'é menor que o segundo número', num2);
    } else {
      console.log('O primeiro número', num1, 'é igual ao segundo número', num2);
    }
  };

  exercicio9 = () => {
    // 💪 Exercício 9
    console.log('👉 Exercício 9: Compare se dois textos são diferentes.');

    let texto1 = 'Olá sou o Geadas';
    let texto2 = 'Olá sou o Gustavo';

    if (texto1 == texto2) {
      console.log('O primeiro texto -', texto1, ' é igual ao segundo texto -', texto2);
    } else {
      console.log('O primeiro texto -', texto1, ' é diferente do segundo texto -', texto2);
    }
  };

  // operadores Logicos
  exercicio10 = () => {
    // 💪 Exercício 10
    console.log('👉 Exercício 10: Verifique se uma pessoa pode dirigir (temIdade && temCarta).');

    let temIdade = 18;
    let temCarta = true;

    if (temIdade >= 18 && temCarta) {
      console.log('A pessoa pode dirigir');
    } else {
      console.log('A pessoa não pode dirigir');
    }
  };

  exercicio11 = () => {
    // 💪 Exercício 11
    console.log('👉 Exercício 11: Verifique se o acesso é permitido (logado || admin).');

    let logado = false;
    let admin = true;

    if (admin || logado) {
      console.log('O acesso é permitido');
    } else {
      console.log('O acesso é negado');
    }
  };

  exercicio12 = () => {
    // 💪 Exercício 12
    console.log('👉 Exercício 12: Inverta o valor de uma variável booleana.');

    let variavel: boolean = false;

    variavel =! variavel

    console.log('O resultado invertido após inversão é:', variavel);
  };
}

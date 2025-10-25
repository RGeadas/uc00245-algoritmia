import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicios',
  imports: [],
  templateUrl: './exercicios.html',
  styleUrl: './exercicios.css'
})
export class Exercicios implements OnInit {

  ngOnInit(): void {

    this.exercicio1();
    this.exercicio2();
    this.exercicio3();
    this.exercicio4();
    this.exercicio5();
    this.exercicio6();

  }
     /****************************** Exercicios ******************************/
     // ======================================================
     // 🔹 Exercicios Aula 01
     // ======================================================
    
    exercicio1 = () => {
    // 💪 Exercício 1
    console.log('👉 Exercício 1: Declare 3 variáveis: nome (string), idade (number) e ativo (boolean). Mostre-as no console.');

      let nome: string = "Ruben Geadas";
      let idade: number = 32;
      const ativo: boolean = true;

      console.log('O', nome, 'tem', idade, 'e atualmente o estado dele é', ativo)
    }
    
    exercicio2 = () => {
    // 💪 Exercício 2
    console.log('👉 Exercício 2: Crie uma variável cidade e depois altere seu valor.');

      let cidade: string = "Lisboa";

      console.log('A cidade inicial foi:',cidade)

      cidade = "Dublin";

      console.log('A segunda cidade foi:',cidade)
    }
 
    exercicio3 = () => {
    // 💪 Exercício 3
    console.log('👉 Exercício 3: Crie uma variável do tipo any e mude seu tipo três vezes.');
    
      let variavel: any = 23

      console.log('O meu numero preferido é', variavel)

      variavel = 'Simba'

      console.log('O nome do meu gato é', variavel)

      variavel = false

      console.log('É', variavel, 'que o céu é vermelho')
    }

    exercicio4 = () => {
    // 💪 Exercício 4
    console.log('👉 Exercício 4: Crie duas variáveis e mostre no console a soma e subtração delas.');
    
      let num1 = 10;
      let num2 = 5;

      console.log('Soma:', num1 + num2)
      console.log('Subtração:', num1 - num2)
    }
    exercicio5 = () => {
    // 💪 Exercício 5
    console.log('👉 Exercício 5: Calcule a área de um retângulo (largura * altura).' );
      
      let largura = 15;
      let altura = 5;
      let retangulo: number = largura * altura;
      
      console.log('A área do retangulo é:', retangulo)
    }

    exercicio6 = () => {
    // 💪 Exercício 6
    console.log('👉 Exercício 6: Mostre o resto da divisão de 20 por 6.');

      let num1 = 20;
      let num2 = 6;
      
      console.log('O resto da divisão de 20 por 6 é', num1 % num2)
    }
  
}

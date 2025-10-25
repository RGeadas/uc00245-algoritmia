import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  variavelGlobal: string = ''; // variavel startada vazia
  variavelGlobal2!: string; // variavel não startada
  variavelGlobal3?: string; // variavel não startada
  variavelGlobal4: number = 0; // variavel não startada

  arrayGlobal: string [] = [];

  ngOnInit(): void {
    let teste = '';
    const nome = '';

    this.exemploVariaveisETipos();
    this.exemploVariaveisEtipos2();
  }
  // ======================================================
  // 🔹 1. VARIÁVEIS E TIPOS DE DADOS
  // ======================================================
  exemploVariaveisETipos(): void {
    console.log('\n🧩 1️⃣ VARIÁVEIS E TIPOS DE DADOS');
    console.log('--------------------------------');

    // 📘 Exemplo de código:

    let nome1: string = 'João';
    let idade1: number = 25;
    const ativo1: boolean = true;
    const valor: any = 'pode ser qualquer tipo';
    this.variavelGlobal = 'São as que começam com THIS.';
    this.variavelGlobal3 = undefined

    console.log(nome1, idade1, ativo1, valor, this.variavelGlobal);
  }

  exemploVariaveisEtipos2 = () => {
    console.log('\n🧩 1️⃣ VARIÁVEIS E TIPOS DE DADOS');
    console.log('--------------------------------');

    // 📘 Exemplo de código:

    let nome1: string = 'João';
    let idade1: number = 25;
    const ativo1: boolean = true;
    const valor: any = 'pode ser qualquer tipo';
    this.variavelGlobal = 'São as que começam com THIS.';

    console.log(nome1, idade1, ativo1, valor, this.variavelGlobal);
  };

  // ======================================================
  // 🔹 2. OPERADORES ARITMÉTICOS
  // ======================================================
  exemploOperadoresAritmeticos(): void {
    console.log('\n🧩 2️⃣ OPERADORES ARITMÉTICOS');
    console.log('--------------------------------');

    // 📘 Exemplo de código:

    let num1 = 10;
    let num2 = 3;

    console.log(num1 + num2); // Adição
    console.log(num1 - num2); // Subtração
    console.log(num1 * num2); // Multiplicação
    console.log(num1 / num2); // Divisão
    console.log(num1 % num2); // Resto da divisão
  }

  /****************************** Exercicios ******************************/

}

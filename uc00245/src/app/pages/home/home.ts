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
    this.exemploOperadoresAritmeticos();
    this.exemploOperadoresComparacao();
    this.exemploCondicao();
    this.demonstrarReferencias();
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
  }

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

  /***Operadores de  comparação */
 
  exemploOperadoresComparacao(): void {
    console.log('\n🧩 3️⃣ OPERADORES DE COMPARAÇÃO');
    console.log('--------------------------------');
 
    // 📘 Exemplo de código:
 
    let x = 5;
    let y = 10;
 
    console.log(x == y); // Igualdade
    console.log(x != y); // Diferença
    console.log(x > y); // Maior que
    console.log(x < y); // Menor que
    console.log(x >= y); // Maior ou igual
    console.log(x <= y); // Menor ou igual
  }
  
  /*** if/else if/else - Múltiplas condições */
  exemploCondicao(): void {
  let nota: number = 85;

  if (nota >= 90) {
    console.log("Excelente - A");
  } else if (nota >= 80) {
    console.log("Muito Bom - B");
  } else if (nota >= 70) {
    console.log("Bom - C");
  } else if (nota >= 50) {
    console.log("Suficiente - D");
  } else {
    console.log("Insuficiente - F");
  }

  }

  // ======================================================
  // 🔹 DEMONSTRAÇÃO DE REFERÊNCIAS DE MEMÓRIA
  // ======================================================
  demonstrarReferencias() {
    console.log('=== DEMONSTRAÇÃO DE REFERÊNCIAS DE MEMÓRIA ===');
 
    // 1. Tipos primitivos - Cópia por VALOR
    console.log('\n1. TIPOS PRIMITIVOS (Cópia por VALOR):');
    let a = 10;
    let b = a; // Cópia do valor
    console.log('Antes da modificação:');
    console.log('a =', a, 'b =', b);
 
    b = 20; // Modifica apenas b
    console.log('Depois de modificar b:');
    console.log('a =', a, 'b =', b); // a mantém o valor original
 
    // 2. Objetos - Cópia por REFERÊNCIA
    console.log('\n2. OBJETOS (Cópia por REFERÊNCIA):');
    const obj1 = { nome: 'João do Obj1', idade: 30 };
    const obj2 = obj1; // Cópia da referência (mesmo endereço de memória)
 
    console.log('Antes da modificação:');
    console.log('obj1 =', obj1);
    console.log('obj2 =', obj2);
 
    obj2.idade = 35; // Modifica ambos!
    obj2.nome = 'tony do obj2'; //Mudando nome do Objeto 2
 
    console.log('Depois de modificar obj2.idade e obj2.nome:');
    console.log('obj1 =', obj1); // Também foi modificado!
    console.log('obj2 =', obj2);
 
    // 3. Arrays - Também por referência
    console.log('\n3. ARRAYS (Cópia por REFERÊNCIA):');
    const arr1 = [1, 2, 3];
    const arr2 = arr1; // Mesma referência
 
    console.log('Antes da modificação:');
    console.log('arr1 =', arr1);
    console.log('arr2 =', arr2);
 
    arr2.push(4); // Modifica ambos arrays
    console.log('Depois de arr2.push(4):');
    console.log('arr1 =', arr1); // Também modificado!
    console.log('arr2 =', arr2);
 
    // 4. Comparação de referências
    console.log('\n4. COMPARAÇÃO DE REFERÊNCIAS:');
    console.log('obj1 === obj2:', obj1 === obj2); // true - mesma referência
    console.log('arr1 === arr2:', arr1 === arr2); // true - mesma referência
 
    const obj3 = { nome: 'João', idade: 35 }; // Objeto igual mas diferente referência
    console.log('obj1 === obj3:', obj1 === obj3); // false - referências diferentes
 
    // 5. Cópia real (deep copy)
    console.log('\n5. CÓPIA REAL (Deep Copy):');
    const original = { x: 10, y: 20 };
    const copiaReal = JSON.parse(JSON.stringify(original)); // Deep copy
    console.log('original === copiaReal são iguais em referencia ?', original === copiaReal); // false - mesma referência
    console.log('original === copiaReal são iguais em conteudo ?', original.x === copiaReal.x); // true - no mesmo conteudo
 
    console.log('original =', original);
    console.log('copiaReal =', copiaReal);
 
    copiaReal.x = 99;
    console.log('Depois de modificar copiaReal.x:');
    console.log('original =', original); // Não modificado!
    console.log('copiaReal =', copiaReal); // Apenas este foi modificado
 
    // 6. Cópia superficial (shallow copy)
    console.log('\n6. CÓPIA SUPERFICIAL (Shallow Copy):');
    const objCompleto = {
      dados: { valor: 100 },
      lista: [1, 2, 3],
    };
 
    const shallowCopy = { ...objCompleto }; // Spread operator - shallow copy
 
    console.log('Original:', objCompleto);
    console.log('Shallow Copy:', shallowCopy);
 
    shallowCopy.dados.valor = 999; // Modifica ambos!
    shallowCopy.lista.push(4); // Modifica ambos!
 
    console.log('Depois de modificar shallowCopy:');
    console.log('Original:', objCompleto); // Foi modificado nos objetos internos!
    console.log('Shallow Copy:', shallowCopy);
 
    console.log('\n=== FIM DA DEMONSTRAÇÃO ===');
  }

}


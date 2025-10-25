import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicios',
  imports: [],
  templateUrl: './exercicios.html',
  styleUrl: './exercicios.css'
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

  }
  
  /****************************** Exercicios ******************************/

}

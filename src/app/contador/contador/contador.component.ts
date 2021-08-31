//ocupamos el decorador para convertirlo en un componete propio de angular
import { Component } from '@angular/core';

@Component({
  selector: './app-contador',
  template: `

    <h1> {{ titulo }} </h1>
    <h3> La base es: <strong> {{ base }} </strong></h3>

    <button (click)=" acumular(-base) "> - {{ base }} </button> <!-- cuando usamos parentesis quiere decir que se va a hacer uso de un evento-->

    <span> {{ numero }} </span>

    <button (click)=" acumular(base) "> + {{ base }} </button>
  `
})


export class ContadorComponent {
  titulo: string = 'Contador App';
  numero: number = 10;
  base: number = 5;

  acumular( valor: number ) {
    this.numero += valor;
  }
}

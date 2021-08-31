import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

// las directivas nos ayudan a manejar el don de una manera facil y conveniente
export class ListadoComponent {
  //los ciclos de vida con su constructor ciertos pasos o metodos que dispara angular de manera automatica
// el constructor se renderiza antes de la renderizacion del componente
// se utiliza para inicializar cosas, hacer peticiones de algun servicio

  heroes: string[] = ["Spiderman", "Ironman", "Wonder-Woman", "Thor" ];
  heroeBorrado: string = '';

  borrarHeroe() {
    console.log("borrando...")
   return this.heroeBorrado = this.heroes.shift() || "";



  }
}

import { Component } from '@angular/core'; // este es un decorador llamado component

@Component({
  selector: 'app-root', // Aca va el selector del html que va a renderizar este componente
  templateUrl: './app.component.html',//especifico el archivo html que se va a usar para renderizar este componente
  styleUrls: ['./app.component.css']
  //template:  me permite colocar directamente una estructura para ser renderizada. El html seria ignorado
  //antes se sugería que fuese de 3 lineas. Pero también ha surgido el uso de colocar todo el tramo de hatml que correspondo al componente, ya que asi se tendria la clase y el tramo de html en el mismo archivo
})
export class AppComponent {



}


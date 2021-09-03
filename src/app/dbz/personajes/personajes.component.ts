import { Component } from '@angular/core';
import {DbzService} from "../services/dbz.service";

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

  // @Input() personajes: Personaje[] = []
  get personajes() {
    return this.dbzService.personajes;
  }

  constructor(private dbzService: DbzService) {
  }
//dentro del los parentesis de input puedo colocar el nombre que yo quiero que esa data se llamen en el
  //html lo que coloque entre los parentesis es lo que debo colocar entre corchetes
}

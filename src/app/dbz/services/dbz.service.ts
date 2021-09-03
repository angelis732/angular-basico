//El decorador de un servicio es de tipo injectable
import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {
//lo coloco privado porque no quiero que este arreglo sea manipulado desde otro lado
  //con esto se busca romper la referencia con la estructura original

  //en lo servicios se pueden inyectar otros servicios
  private _personajes: Personaje[] = [
    {
      nombre: "Goku",
      poder: 15000
    },
    {
      nombre: "Vegeta",
      poder: 7500
    }
  ];

  get personajes(): Personaje[] {
    return [...this._personajes];
    //con el spread operator le estoy diciendo que haga un nuevo array
  }
  constructor() {}

  agregarPersonaje ( personaje: Personaje ) {
    this._personajes.push( personaje )
  }


}

// los comentarios no llegan a produccion

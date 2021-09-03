import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from "./services/dbz.service";

//es buena practica hacer todas la importaciones de angular.
// luego las importaciones de terceros  y por ultimo lo que nosotros creamos
// los provider son los servicios, son todos los servicios que se especofican en provider. Actuan como singleton
// es decir, un unica instancia a lo largo de todo el modulo
// se jecutan cuando alguien lo requiere, se realiza una sola instancia para todo el que lo necesite consumir
@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    DbzService
  ]
})
export class DbzModule { }

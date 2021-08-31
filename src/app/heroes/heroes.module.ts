import { NgModule } from "@angular/core"
import {HeroeComponent} from "./heroe/heroe.component";
import {ListadoComponent} from "./listado/listado.component";
import {CommonModule} from "@angular/common"; //
//las declaraciones son un arreglo y dicen que cosas contiene el module
//Los export son las cosas que quiero hacer publicas o visibles fuera de este modulo
//en lis imports van modulos
@NgModule({
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],
  exports: [
    ListadoComponent
  ],
  imports: [
    CommonModule
  ]


})

export class HeroesModule {}

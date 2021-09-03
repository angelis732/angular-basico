import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from "./heroes/heroes.module";
import { ContadorModule } from "./contador/contador.module";
import {DbzModule} from "./dbz/dbz.module";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ // otros modules
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule
  ],
  providers: [], //Son como servicios especificos para un modulo
  bootstrap: [AppComponent] //Este es un componente principal, generalmente se coloca una vez
})
export class AppModule { }

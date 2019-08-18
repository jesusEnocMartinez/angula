import { Component } from "@angular/core";
import { Button } from 'protractor';

@Component({
    selector: 'cursos',
    template: '<h1>mis cursos</h1>',
  

})
export class CursosComponent{
    nombre = 'luis'
    getnombre(){
        return this.nombre;
    }

}
import { Component } from '@angular/core';
import { Button } from 'protractor';
import { usuarioservicio } from './usuarios.service';

@Component({
  selector: 'app-root',
  template: '<Button (click)="Save($event)">Guardar</Button>',
  
styles: [' ']
})
export class AppComponent {

  save(e){
    console.log(e);
  }
}

///@Component({
//selector: 'app-root',
//template: '<input type ="text" (keyup.enter) = "onkeyup($event)"</',
//styles: [' ']
//})
//export class AppComponent {
//onekeyup(){ 
 //console.log("Enter fue presionado");
 // }
//}

///@Component({
//selector: 'app-root',
//template: '<input type ="text" (keyup.enter) = "onkeyup(nombre.value)" #nombre/>',
//styles: [' ']
//})
//export class AppComponent {
//onekeyup(usuario){ 
 //console.log("usuario");
 // }
//}




///@Component({
//selector: 'app-root',
//template: './.appcomponetn.html.
//styles: [' ./.appcomponetn.css']
//})
//export class AppComponent {

//personas: any =  [ ];
//constructor(){
  //let usuario = new usuarioservicio;
  //this.personas = usuario.gteusuarios;
//}
 // }
//}




import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "Fernando";
  nombre2 = "miguel de cervantes sAAvedra"
  array = [1,2,3,4,5,6,7,8,9,10];
  pi = Math.PI;
  a = 0.234;
  salario = 1234.5;

  heroe = {
    nombre: "Jose",
    clave: "pepe",
    edad: 43,
    direccion:{
      calle: "falsa",
      numero: 123
    }
  }

  valorDePromesa = new Promise ((resolve,reject)=>{

    setTimeout(()=>{resolve('llego la hora'),3500})

  })

  fecha = '2017-10-01 10:30';

  video = "uEDhGX-UTeI";

  activar = true;
  passw = "123abc";
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
      border: 1px solid red;
    }
  `]
})
export class TemplatesComponent{
  usuario: Object = {
    nombre: null,
    apellido: null,
    email: null,
    pais: "",
    sexo: "Hombre",
    acepta: false
  }

  paises = [{
      codigo: "CRI",
      nombre: "Costa Rica"
    },
    {
      codigo: "ES",
      nombre: "España"
    },
    {
      codigo: "AR",
      nombre: "Argentina"
    },
    {
      codigo: "MEX",
      nombre: "Mexico"
    },
  ]

  constructor() { }

  guardar(forma: NgForm){
    console.log("ngForm", forma);
  }
}

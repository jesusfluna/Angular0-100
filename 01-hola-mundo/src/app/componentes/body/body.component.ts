import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  mostrar:boolean = true;
  frase:any = {
    mensaje: "En algun lugar de la mancha de cuyo nombre no quiero acordarme no ha" 
              +"mucho tiempo que vivia un hidalgo de los de lanza en astillero ",
    autor: "Miguel de Cervantes"
  }

  personajes:string[] = ['Miguel de cerantes',' Edgar Alan Poe','H.P. Lovecraft']; 

  constructor() { }

  ngOnInit() {
  }

}

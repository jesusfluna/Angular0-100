import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {
  id:number;

  constructor(private route:ActivatedRoute) { 
    this.route.params.subscribe(parametros => {
      this.id = parametros['id'];
    });
  }

  ngOnInit() {
  }

}

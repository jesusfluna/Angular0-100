import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {
  id:number;

  constructor(private route:ActivatedRoute) { 
    this.route.parent.params.subscribe(parametros => {
      this.id = parametros['id'];
    });
  }

  ngOnInit() {
  }

}

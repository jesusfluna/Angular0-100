import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { heroeModel } from '../../models/heroe.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:heroeModel[] = [];
  cargando:boolean = false;

  constructor(private heroesService:HeroesService) { }

  ngOnInit() {

    this.cargando = true;

    this.heroesService.getHeroes().subscribe(data =>{
      this.heroes = data;
      this.cargando = false;
    });
  }


  borrarHeroe(heroe:heroeModel, indice:number){
    Swal.fire({
      title: "¿Esta seguro?",
      text: heroe.nombre+" va ha ser borrado, ¿Está usted seguro?",
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp =>{

      if(resp.value){
        this.heroes.splice(indice,1);
        this.heroesService.borrarHeroe(heroe.id).subscribe();
      }

    });

  }
}

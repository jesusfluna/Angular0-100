import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { heroe } from '../../models/heroes.interface';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  heroes:heroe[] = [];
  termino:string;

  constructor(private heroesServicces:HeroesService, private activatedRouter:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.termino = params['busqueda'];
      this.heroes = this.heroesServicces.buscarHeroes(params['busqueda']);

    }) 
  }
}

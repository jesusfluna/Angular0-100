import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { heroe } from '../../models/heroes.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:heroe[] = [];

  constructor(private heroesServicice: HeroesService) { }

  ngOnInit() {
    this.heroes = this.heroesServicice.getHeroes();
  }

}

import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { heroe } from '../../models/heroes.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:heroe[] = [];

  constructor(private heroesServicice: HeroesService, private router:Router) { }

  ngOnInit() {
    this.heroes = this.heroesServicice.getHeroes();
  }

  public verHeroe(idx:number){
    this.router.navigate(['/heroe',idx]);
  }
}

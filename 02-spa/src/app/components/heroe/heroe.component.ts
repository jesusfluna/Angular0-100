import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { heroe } from '../../models/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe:heroe;

  constructor(private activateRouter:ActivatedRoute, private heroesService:HeroesService) { 
    this.activateRouter.params.subscribe( params => {

      this.heroe = this.heroesService.getHeroe(params['id']);
    
    })
  }

  ngOnInit() {
  }

}

import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { heroe } from '../../models/heroes.interface'
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe:heroe;
  @Input() index:number;

  @Output() heroeSel:EventEmitter<number>;

  constructor(private router:Router) {
    this.heroeSel = new EventEmitter();
   }

  ngOnInit() {
  }

  public verHeroe(){
    this.router.navigate(['/heroe',this.index]);
    // this.heroeSel.emit(this.index);
  }
}

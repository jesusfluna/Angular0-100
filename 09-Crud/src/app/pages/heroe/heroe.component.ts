import { Component, OnInit } from '@angular/core';
import { heroeModel } from '../../models/heroe.model';
import { NgForm } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe:heroeModel = new heroeModel();

  constructor(private heroeservice:HeroesService, private route:ActivatedRoute) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id')
    

    if(id !== 'nuevo'){
      this.heroeservice.getHeroe(id).subscribe( (data:heroeModel) => {
        this.heroe = data;
        this.heroe.id = id;
      });
    }
  }

  guardar(form:NgForm){
    if(form.invalid){
      console.log("Formulario no valido");
      return;
    }

    Swal.fire({
      title: "Espere",
      text: "Guardando informacion",
      allowOutsideClick: false,
      icon: 'info'
    });

    Swal.showLoading();
    let peticion: Observable<any>;


    if(this.heroe.id){
      peticion = this.heroeservice.actualizarHeroe(this.heroe);
    }else{
      peticion = this.heroeservice.crearHeroe(this.heroe);
    }

    peticion.subscribe((resp)=>{

      Swal.fire({
        title: this.heroe.nombre,
        text: "Actualizacion realizada",
        icon: 'success'
      });

    });
  }
}

import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';
import { Lista } from '../../models/lista.model';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
  @ViewChild( IonList, {static: false} ) lista: IonList;
  @Input() terminada = true;

  constructor(public deseosService:DeseosService,private router:Router, private alertCtr:AlertController) {

  }

  ngOnInit(){ }

  listaSeleccionada(lista:Lista){
    if(this.terminada){
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    }else{
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    }
  }

  borrarLista(lista:Lista){
    this.deseosService.borrarLista(lista);
  }

  async editarLista(lista:Lista){
    const alert = await this.alertCtr.create({
      header: 'Cambiar titulo',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: lista.titulo,
        }
      ],
      buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () =>{
              console.log('Cancelar');
              this.lista.closeSlidingItems();
            }
          },
          {
            text: 'Modificar',
            handler: ( data ) =>{ //data tiene el valor del objeto definido en el inputs
              if(data.titulo.length === 0){
                return ;
              }

              lista.titulo = data.titulo;
              this.deseosService.guardarStorage();
              this.lista.closeSlidingItems();
            }
          }
      ]
    }); 

    alert.present();
  }
}

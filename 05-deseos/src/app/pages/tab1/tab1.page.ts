import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public deseosService:DeseosService,private router:Router, private alertCtr:AlertController) {

  }

  async agregarLista(){
    const alert = await this.alertCtr.create({
      header: 'Nueva lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista',
        }
      ],
      buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () =>{
              console.log('Cancelar');
            }
          },
          {
            text: 'Crear',
            handler: ( data ) =>{ //data tiene el valor del objeto definido en el inputs
              console.log(data);
              if(data.titulo.length === 0){
                return ;
              }

              const listaid = this.deseosService.crearLista(data.titulo);
              this.router.navigateByUrl(`/tabs/tab1/agregar/${listaid}`);
            }
          }
      ]
    }); 

    alert.present();
  }
}

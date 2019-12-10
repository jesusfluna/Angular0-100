import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {
  listas:Lista [] = [];

  constructor() {
    this.cargarStorage();
   }

   crearLista(titulo:string):number{
    const nueva = new Lista(titulo);
    this.listas.push(nueva);
    this.guardarStorage();

    return nueva.id
   }

   guardarStorage(){
    localStorage.setItem('data', JSON.stringify(this.listas));
   }

   cargarStorage(){
    if(localStorage.getItem('data')){
      this.listas = JSON.parse(localStorage.getItem('data'));
    }else{
      this.listas = [];
    }
   }

   obtenerLista(id: string | number){
     id = Number(id);

     return this.listas.find( listaData => listaData.id === id );
   }

   borrarLista(lista:Lista){
     this.listas = this.listas.filter(data => data.id !== lista.id);
     this.guardarStorage();
   }
}

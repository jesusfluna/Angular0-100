import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { heroeModel } from '../models/heroe.model';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private urls:string = "https://login-app-ca191.firebaseio.com";
  
  constructor(private http:HttpClient) { }

  crearHeroe(heroe:heroeModel){
    return this.http.post(this.urls+"/heroes.json",heroe).pipe(map((resp:any)=>{
      heroe.id = resp.name;
      return heroe;
    }));
  }

  actualizarHeroe(heroe:heroeModel){
    const heroeTemp = {
      ...heroe
    }

    delete heroeTemp.id;

    return this.http.put(this.urls+"/heroes/"+heroe.id+".json",heroeTemp);
  }

  getHeroes(){
    return this.http.get(this.urls+"/heroes.json").pipe(map(this.crearArray),
    delay(1500));
  }

  private crearArray(heroesObj:object){
    const heroes:heroeModel[] = [];

    if(heroesObj === null) { return []; }

    Object.keys(heroesObj).forEach( key =>{
      const heroe:heroeModel = heroesObj[key];
      heroe.id = key;
      
      heroes.push(heroe);
    })

    return heroes;
  }

  getHeroe(id:string){
    return this.http.get(this.urls+"/heroes/"+id+".json");
  }

  borrarHeroe(id:string){
    return this.http.delete(this.urls+"/heroes/"+id+".json");
  }
}

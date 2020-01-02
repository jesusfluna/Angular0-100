import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url:string = "https://identitytoolkit.googleapis.com/v1/accounts:";
  private apiKey: string = "AIzaSyC9ciplXCv1Jr3dWeA1h3-YSNNQ7n8TnVg";
  private userToken: string;

  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  constructor(private http:HttpClient) {
    this.leerToken();
   }

  logout(){
    localStorage.removeItem('token');
  }
  
  login(usuario:usuarioModel){
    const authData={
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    }

    return this.http.post( 
        this.url+"signInWithPassword?key="+this.apiKey,
        authData
    ).pipe(
      map(resp =>{
        this.guardarToken(resp['idToken']);
        return resp;
      })
      );

  }

  nuevoUsuario(usuario:usuarioModel){
    const authData={
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    }

    return this.http.post( 
        this.url+"signUp?key="+this.apiKey,
        authData
    ).pipe(
      map(resp =>{
        this.guardarToken(resp['idToken']);
        return resp;
      })
      );
  }

  private guardarToken(idToken:string){
    this.userToken = idToken;
    localStorage.setItem('token',idToken);

    let hoy = new Date();
    hoy.setSeconds( 3600 );

    localStorage.setItem('expira', hoy.getTime().toString());
  }

  private leerToken():string{
    if(localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token');
    }else{
      this.userToken = "";
    }

    return this.userToken;
  }

  estaAutenticado():boolean{
    if(this.userToken.length < 2){
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if(expiraDate > new Date()){
      return true;
    }else{
      return false;
    }
  }
}

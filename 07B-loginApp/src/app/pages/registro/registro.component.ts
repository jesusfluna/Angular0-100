import { Component, OnInit } from '@angular/core';
import { usuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuario:usuarioModel = new usuarioModel();
  recordarme:boolean = false;

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() { }

   onSubmit( form:NgForm){

    if(form.invalid){ return; }

    Swal.fire({
      icon: 'info',
      title: 'Cargando...',
      text: 'Espere por favor',
      allowOutsideClick: false,
    })
    Swal.showLoading();
    
     this.auth.nuevoUsuario(this.usuario).subscribe( resp =>{
      Swal.close();

      if(this.recordarme){
        localStorage.setItem('email',this.usuario.email);
      }

      this.router.navigateByUrl('/home');
     }, error =>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.error.error.message,
      })
     })
   }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { usuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: usuarioModel = new usuarioModel();
  recordarme: boolean = false;

  constructor( private auth:AuthService,private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('email')){
      this.usuario.email = localStorage.getItem('email');
      this.recordarme = true;
    }
  }

  login( form:NgForm){
    if(form.invalid){ return; }

    Swal.fire({
      icon: 'info',
      title: 'Cargando...',
      text: 'Espere por favor',
      allowOutsideClick: false,
    })
    Swal.showLoading();

    this.auth.login(this.usuario).subscribe(resp=>{

      Swal.close();

      if(this.recordarme){
        localStorage.setItem('email',this.usuario.email);
      }

      this.router.navigateByUrl('/home');
    },error =>{

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.error.error.message,
      })
    });
  }
}

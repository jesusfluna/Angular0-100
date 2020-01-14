import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma:FormGroup;
  usuario:any = {
    nombre: "Francisco",
    apellido: "Quevedo",
    email: "fquevedo@email.com"
    // pasatiempos: ["Correr", "Dormir", "Comer"]
  }

  constructor() {
    this.forma = new FormGroup(
      {
      'nombre': new FormControl('', [
                                      Validators.required,
                                      Validators.minLength(5)
                                    ]),
      'apellido': new FormControl('', Validators.required),
      'email': new FormControl('', [
                                    Validators.required, 
                                    Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
                                    ]),
      'pasatiempos': new FormArray([
                                      new FormControl('Correr', Validators.required)
                                    ]),
      'username': new FormControl('', Validators.required, this.existeUsuario)
      });

       this.forma.controls['username'].valueChanges.subscribe(data => {
         console.log(data);
       });

       this.forma.controls['username'].statusChanges.subscribe(data => {
         console.log(data);
       });

      /*
      this.forma.statusChanges.subscribe(data => {
        console.log(data);
        console.log(this.forma)
      });*/
   }

   agregar(){
     (<FormArray>this.forma.controls['pasatiempos']).push(new FormControl('', Validators.required));
   }

  existeUsuario(control:FormControl):Promise<any>|Observable<any>{
    console.log(control)
    let promesa = new Promise((resolve, reject)=>{
      setTimeout(()=>{
        if(control.value === "inerco"){
          resolve({existe:true});
        }else{
          resolve(null);
        }
      },3000)
    });

    return promesa;
  }

   guardar(){
     console.log(this.forma);
     
    //  this.forma.reset({
    //   nombre: "",
    //   apellido: "",
    //   email: ""
    //  })
   }
}

import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any[] = [];
  loading:boolean=true;
  error:boolean;
  mensajeError:string;

  constructor(private spotify:SpotifyService) { 

    this.error = false;
    this.spotify.getNewReleases().subscribe((params:any) => {
      this.nuevasCanciones = params;
      this.loading = false

    }, errorS =>{

      this.mensajeError = errorS.error.error.message;
      this.error = true;
      this.loading = false;
      
    });
  }

  ngOnInit() {}

}

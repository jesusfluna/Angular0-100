import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artistas: any[] = [];
  loading:boolean;

  constructor(private spotify:SpotifyService) { }

  ngOnInit() {
  }

  buscar(termino:string){
    this.loading = true;

    this.spotify.getArtistas(termino).subscribe((params:any)=>{
      this.artistas = params;
      this.loading = false;
    });
  }
}

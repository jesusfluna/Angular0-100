import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  token:string = "BQBtHvsI_3K3CFxFCV_36g9fooBPyRT3blwbyLwdyrqGCvqOtagxLtLZ2srflcs0j_22rFCmhGkmFWCwSINuUD_VljJDN32Wlzz32UshvcfdM3XpJjjdCEoY1G9kQwSu45pg3V6QQCGZ";
  limit:number = 25;
  country:string = "ES";

  constructor(private http:HttpClient) { }

  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer '+this.token,
    });

    return this.http.get(url,{headers});
  }
  
  getNewReleases(){
    return this.getQuery("browse/new-releases").pipe( map( data => data['albums'].items));
  }

  getArtistas(termino:string){
    return this.getQuery("search?q="+termino+"&type=artist&limit="+this.limit).pipe(map(data => data['artists'].items));
  }

  getArtista(id:string){
    return this.getQuery("artists/"+id);
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=${this.country}`).pipe(map(data => data['tracks']));
  }
}

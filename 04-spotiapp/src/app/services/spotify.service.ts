import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  token:string = "BQB-RtQg1JhgTCHbzM0L8eIFP_f5O6B0UxeH2pmaoAUi6jvA9S5_dvHlHLZXBEQxOGTiaSRlnIJn499U77SPXIEeTWSaVslwe291TP6sAkvCW56kdChOQz2kZRDQFxVKIMRVNvQki84l";
  limit:number = 25;

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

}

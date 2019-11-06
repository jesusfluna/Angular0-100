import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }
  token:string = "BQDii-Hx1NIyxgxP4XK3B2GeZP9EHWgyk7efukYyHdKp6d461E2BMt9-r_GBOr_NZBzEMVkLKjXEH_HYn1HsG7kEbwcO9ChRHZ9Rouj3uOLXQn-p6SxHqoar5avwFkLpKNPj81XDWbGc";
  limit:number = 50;

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer '+this.token,
    });

    return this.http.get("https://api.spotify.com/v1/browse/new-releases",{headers});

  }

  getArtistas(termino:string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer '+this.token,
    });

    return this.http.get("https://api.spotify.com/v1/search?q="+termino+"&type=artist&limit=25",{headers});
  }

}

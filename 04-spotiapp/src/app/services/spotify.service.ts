import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  token:string;
  constructor(private http:HttpClient) {
    this.token = "BQDh6VPhoMKsgFiUcEkY-Df6iwuFfrIFs73ARGfT5m88hNpJvwxGV19oEJ7b_rlE4XXo6aQNzUop_fJb3UivI2FN1I02Fc4GFhOLg0b3yYf_VomaA6ipanVPmvShd63aVrMIHvzLHQUt";
   }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer '+this.token,
    });

    return this.http.get("https://api.spotify.com/v1/browse/new-releases",{headers});
  }
}

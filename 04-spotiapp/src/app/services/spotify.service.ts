import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC-mtHO2RooMJVwNnNwf0c4L3RFxrXtSfYjaiTu6LLLlQ9HhwwFdUQmn2iaA0xKRXtucQ5l7c88nmamUG8WKvrdCZYD3BaKVBWDv9XvBcsvgD6LkCnTKiL05zLdYYbN_i_4VFw-3lkL',
    });

    return this.http.get("	https://api.spotify.com/v1/browse/new-releases",{headers});

  }
}

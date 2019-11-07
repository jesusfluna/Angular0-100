import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';


@Pipe({
  name: 'domsegurospotify'
})
export class DomseguroPipe implements PipeTransform {
  url:string = 'https://open.spotify.com/embed/track/';
  constructor( private domSanitizer:DomSanitizer ){ }

  transform( value: string): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl( this.url + value );
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo:any[] = [];

  constructor( private http: HttpClient ) {

    this.cargaInfo();
    this.cargaEquipo();
  }

  private cargaInfo(){
        // console.log('Servicio de infoPagina listo');

    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
        .subscribe( (resp: InfoPagina) => {

          this.cargada = true;
          this.info = resp;
          //console.log(resp);
        });

  }

  private cargaEquipo(){
    
        // Leer el archivo JSON
        this.http.get('https://angular-html-bc1af.firebaseio.com/equipo.json')
        .subscribe( (resp:any) => {

          this.equipo = resp;
          //console.log(resp);
        });

    //this.equipo = resp

  }
}




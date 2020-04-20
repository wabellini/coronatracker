import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor(private http: HttpClient) {
/*     console.log('Servicio info pagina listo');

    // Leer archivo Json
    this.http.get('assets/data/datosgenerales.json')
      .subscribe( ( resp: InfoPagina ) => {
        this.cargada = true;
        this.info = resp;
        console.log(resp);
      }); */

    this.cargarInfo();
    this.cargarEquipo();

  }

  private cargarInfo() {
    console.log('Servicio info pagina listo');

    // Leer archivo Json
    this.http.get('assets/data/datosgenerales.json')
      .subscribe( ( resp: InfoPagina ) => {
        this.cargada = true;
        this.info = resp;
        // console.log(resp);
      });
  }

  private cargarEquipo() {
    console.log('Servicio cargar equipo listo');

    // Leer archivo Json
    this.http.get('https://coronatracker-84f60.firebaseio.com/equipo.json')
      .subscribe( ( resp: any[] ) => {

        this.equipo = resp;
        console.log(resp);
      });
  }

}

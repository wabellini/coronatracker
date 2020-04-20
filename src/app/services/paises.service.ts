import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  cargando = true;
  paises: Pais[] = [];

  totalConfirmados = 0;
  totalRecuperados = 0;
  totalMuertos = 0;

  constructor(private http: HttpClient) {
    this.cargarPaises();
  }

  private cargarPaises() {

    this.http.get('https://coronatracker-84f60.firebaseio.com/CORONAVIRUS.json')
      .subscribe((resp: Pais[]) => {
        console.log(resp);
        this.paises = resp;

        for (let i = 0; i < resp.length; i += 1) {
          this.totalConfirmados += this.paises[i].confirmed;
          this.totalRecuperados += this.paises[i].recovered;
          this.totalMuertos += this.paises[i].dead;
        }

        /*
        setTimeout(() => {
          this.cargando = false;
        }, 2000);
        */

        this.cargando = false;
      });
  }

  getPais(id: string) {

    return this.http.get(`https://coronatracker-84f60.firebaseio.com/CORONAVIRUS/${ id }.json`);

  }


}

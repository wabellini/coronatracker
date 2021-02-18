import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PaisesService } from '../../services/paises.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  pais: Pais;

  muertosPorc = 0;
  recuperadosPorc = 0;

  constructor(private route: ActivatedRoute,
              public paisesService: PaisesService,
              private location: Location) { }

  ngOnInit() {

    this.route.params
      .subscribe(parametros => {
          console.log(parametros);
          console.log(parametros['id']);

          this.paisesService.getPais(parametros['id'])
            .subscribe( (pais: Pais ) => {
              console.log(pais);
              this.pais = pais;
              this.muertosPorc = (( this.pais.dead / this.pais.confirmed ) * 100 );
              this.recuperadosPorc = (( this.pais.recovered / this.pais.confirmed) * 100 );
              // console.log(this.muertosPorc);
              // console.log(this.recuperadosPorc);
            });
        }
      );

  }

  volver() {
    this.location.back();
  }

}

import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { PaisesService } from './services/paises.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'coronatracker';

  constructor(public infoPaginaService: InfoPaginaService,
              public paisesService: PaisesService) {

  }
}


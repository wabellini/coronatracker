import { Component, OnInit } from '@angular/core';
import { Console } from 'console';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public paisesService: PaisesService) { 
    
  }

  ngOnInit() {
  }

}

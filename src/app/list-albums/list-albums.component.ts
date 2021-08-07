import { Component, OnInit } from '@angular/core';
import { TarjetaModels } from '../models/tarjeta.models';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.css']
})
export class ListAlbumsComponent implements OnInit {
  tarjetas: TarjetaModels[];

  constructor() {
    this.tarjetas = [];
   }

  ngOnInit(): void {
  }

  guardar(nombre:string, url:string, txt:string):boolean {
    this.tarjetas.push(new TarjetaModels(nombre, url, txt));
    return false;
  }


}

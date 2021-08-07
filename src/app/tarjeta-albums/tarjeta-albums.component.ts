import { HostBinding } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { TarjetaModels } from '../models/tarjeta.models';

@Component({
  selector: 'app-tarjeta-albums',
  templateUrl: './tarjeta-albums.component.html',
  styleUrls: ['./tarjeta-albums.component.css']
})
export class TarjetaAlbumsComponent implements OnInit {
  @Input() tarjeta: TarjetaModels;
  @HostBinding('attr.class') cssClass = 'col-md-4 mb-5';

  constructor() { }

  ngOnInit(): void {
  }

}

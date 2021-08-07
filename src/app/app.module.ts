import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListAlbumsComponent } from './list-albums/list-albums.component';
import { TarjetaAlbumsComponent } from './tarjeta-albums/tarjeta-albums.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAlbumsComponent,
    TarjetaAlbumsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

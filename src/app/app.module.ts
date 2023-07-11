import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CreatePlayerComponent } from './component/create-player/create-player.component';
import { PlayerlistComponent } from './component/playerlist/playerlist.component';
import{ HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PlayerdetailsComponent } from './component/playerdetails/playerdetails.component';
import { UpdateplayerComponent } from './component/updateplayer/updateplayer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreatePlayerComponent,
    PlayerlistComponent,
    PlayerdetailsComponent,
    UpdateplayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

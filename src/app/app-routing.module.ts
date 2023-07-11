import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePlayerComponent } from './component/create-player/create-player.component';
import { PlayerlistComponent } from './component/playerlist/playerlist.component';
import { PlayerdetailsComponent } from './component/playerdetails/playerdetails.component';
import { UpdateplayerComponent } from './component/updateplayer/updateplayer.component';

const routes: Routes = [

  {
    path:"add",
    component: CreatePlayerComponent
  },
  {
    path:"list",
    component: PlayerlistComponent
  },
  {
    path: 'details/:playerId',
    component:PlayerdetailsComponent
  },
  {
    path: 'update/:playerId',
    component:UpdateplayerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

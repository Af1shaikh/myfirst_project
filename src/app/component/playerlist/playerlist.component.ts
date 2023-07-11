import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayserviceService } from 'src/app/playservice.service';

@Component({
  selector: 'app-playerlist',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.css']
})
export class PlayerlistComponent implements OnInit {

  player: any = [{

    id: '',
    name: ''
  }]

  constructor(private service: PlayserviceService, private router: Router) {

  }
  ngOnInit():void {
    this.getAll();
  }

  getAll() {
    this.service.getAllPlayers().subscribe((data) => {
      this.player = data;
      console.log(this.player);
    })
  }

    deletePlayer(id:number)
    {
      return this.service.deletePlayers(id).subscribe((data) => {
        console.log(data);
        this.getAll();
      })
    }

    playerDetails(id: number) {
      this.router.navigate(['details', id]);
    }

    updateDetails(id:number){
      this.router.navigate(['update',id]);
    }
  
  }
  


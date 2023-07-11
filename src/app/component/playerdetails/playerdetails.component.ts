import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/model/player';
import { PlayserviceService } from 'src/app/playservice.service';

@Component({
  selector: 'app-playerdetails',
  templateUrl: './playerdetails.component.html',
  styleUrls: ['./playerdetails.component.css']
})
export class PlayerdetailsComponent {

  playerId: number = 0 ;
  player: Player = new Player();

  constructor(private route: ActivatedRoute,private router: Router,
    private service: PlayserviceService){ }

    ngOnInit(){
      this.player = new Player();

      this.playerId = this.route.snapshot.params['playerId'];
      this.service.getOnePlayer(this.playerId).subscribe((data)=>{
        console.log(data);
        this.player=data;
      })
    }

    list(){
      this.router.navigate(['list']);
    }

}

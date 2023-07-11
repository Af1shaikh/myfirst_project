import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/model/player';
import { PlayserviceService } from 'src/app/playservice.service';

@Component({
  selector: 'app-updateplayer',
  templateUrl: './updateplayer.component.html',
  styleUrls: ['./updateplayer.component.css']
})
export class UpdateplayerComponent implements OnInit {

  playerId: number = 0;
  player: Player = new Player();
  
  constructor(private route:ActivatedRoute,private router:Router,
    private service: PlayserviceService){}

    ngOnInit(){
      this.player=new Player();
      this.playerId=this.route.snapshot.params['playerId'];
      this.service.getOnePlayer(this.playerId).subscribe((data)=>{
        console.log(data);
        this.player=data;
      })

    }
    onSubmit(){
      this.updatePlayer();
    }

    // updatePlayer(){
    //   this.service.updatePlayer(this.Player).subscribe(
    //     (data)=>{
    //       console.log(data);
    //       this.Player=new Player();
    //       this.gotoList();
    //     }
    //   )
    // }

     
      updatePlayer()
      {
        this.service.updatePlayer(this.player).subscribe((data)=>{
          console.log(data);
          this.gotoList();

        });
      }

      gotoList() {
        this.router.navigate(['list']);
      }

}


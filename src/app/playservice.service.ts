import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayserviceService {

  baseUrl = "http://localhost:8083";
  
  constructor(private http:HttpClient) { }

  getAllPlayers(){

    return this.http.get(`${this.baseUrl}/getAll`);
  }

  deletePlayers(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/delete/${id}`,{responseType: 'text'});
  }

  getOnePlayer(id:number): Observable<any>{
    return this.http.get(`${this.baseUrl}/get/${id}`);
  }

  updatePlayer(player:object){
    return this.http.put(`${this.baseUrl}/update`,player);
  }
}

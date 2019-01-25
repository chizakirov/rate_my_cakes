import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CakesService {

  constructor(private _http: HttpClient) { }

  allCakes(){
    return this._http.get('/cakes');
  }

  createCake(new_cake){
    return this._http.post('/cakes', new_cake);
  }

  showCake(id){
    return this._http.get(`/cakes/${id}`);
  }

  createRatingtoDB(id, new_rating){
    return this._http.patch(`/cakes/${id}`, new_rating);
  }

  deleteCake(id){
    return this._http.delete(`/cakes/${id}`);
  }
}

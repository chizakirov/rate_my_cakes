import { Component, OnInit, Input } from '@angular/core';
import { CakesService } from '../cakes.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() cakeId: any;
  new_rating: any;
  createRatingErrors: any; 

  constructor(private _cakesservice: CakesService) { }

  ngOnInit() {
    this.new_rating = { rating: 0, comment: "" };
  }

  createRating(){
    let obs = this._cakesservice.createRatingtoDB(this.cakeId, this.new_rating)
    obs.subscribe(data => {
      if(data) {
        console.log(data);
        this.createRatingErrors = data; 
      };
      this.new_rating = data;
    });
  }
}

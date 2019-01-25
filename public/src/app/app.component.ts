import { Component, OnInit } from '@angular/core';
import { CakesService } from './cakes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Rate my cakes!';
  cakes: any;
  new_cake: any ;
  show_cake: any;
  createCakeErrors: any;

  constructor(private _cakeService: CakesService){}
  ngOnInit(){
    this.displayCakes();
    this.new_cake = {name: "", url: ""};
    this.show_cake = {name: "", url: ""};
  }

  displayCakes(){
    let observable = this._cakeService.allCakes();
    observable.subscribe(data => {
      this.cakes = data;
    })
  }

  create(){
    let observable = this._cakeService.createCake(this.new_cake);
    observable.subscribe(data => {
      if(data['errors']) {
        console.log(data);
        this.createCakeErrors = data;
      }
      this.new_cake = data;
      this.displayCakes();
      this.new_cake = {name: "", url: ""};
    })
  }

  show(data){
    // let obs = this._cakeService.showCake(id)
    // obs.subscribe(data => {
    //   this.show_cake = data;
    // })
    // or just pass the whole cake object to show(cake) and 
    this.show_cake = data;
  }

  delete(id){
    let obs = this._cakeService.deleteCake(id)
    obs.subscribe(() => {
      this.displayCakes();
    });
  }
}

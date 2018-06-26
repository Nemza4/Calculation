import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
value =0;
values =0; 
  constructor(public navCtrl: NavController) {

  }
  onclickThree(){
    this.value+=3;
    console.log(this.value);
  }

  onclickTwo(){
    this.value+=2;
    console.log(this.value);
  }
  
  onclickfFreeThrow(){
    this.value+=1;
    console.log(this.value);
  }
  onclickThrees(){
    this.values+=3;
    console.log(this.values);
  }
  onclickTwos(){
    this.values+=2;
    console.log(this.values);
  }
  onclickfFreeThrows(){
    this.values+=1;
    console.log(this.values);
  }
  Reset(){
    this.value=0;
    this.values=0;
  }
}
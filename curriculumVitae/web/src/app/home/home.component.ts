import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Constants } from '../app.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  hideXp1: boolean = true;
  hideXp2: boolean = true;
  hideXp3: boolean = true;
  hideXp4: boolean = true;
  hideXp5: boolean = true;
  hideXp6: boolean = true;
  
  isMobile: boolean = false;
  innerWidth: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    console.log('this.innerWidth ', this.innerWidth);
    if(this.innerWidth <= 576) {
      this.isMobile = true;
    }
  }

  openXp(item) {
    console.log('item ', item)

    switch(item) {
      case 'hideXp1':
        this.hideXp1 = !this.hideXp1;
        break;
      case 'hideXp2':
        this.hideXp2 = !this.hideXp2;
        break;
      case 'hideXp3':
        this.hideXp3 = !this.hideXp3;
        break;
      case 'hideXp4':
        this.hideXp4 = !this.hideXp4;
        break;
      case 'hideXp5':
        this.hideXp5 = !this.hideXp5;
        break;
      case 'hideXp6':
        this.hideXp6 = !this.hideXp6;
        break;
    } 
    
  }


}

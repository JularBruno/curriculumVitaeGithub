import { Component, OnInit, Renderer2, Renderer, ViewChild} from '@angular/core';
import { Constants } from '../../app.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.scss'],
})
export class TopmenuComponent implements OnInit {

  @ViewChild('userUpdate') userUpdate: any;

  show: any;
  loading = false;
  scrollPosition: number;
  formObject: any = {};
  canSend = false;

  user: any;
  isUser: boolean = false;

  // userSharedData: any;

  constructor(
    private renderer: Renderer,
    private renderer2: Renderer2,
    private router: Router,

  ) {
    //
    // this.sharedData.currentIsLogin.subscribe(data => this.userSharedData = data);
  }

  ngOnInit() {
  
    // console.log('userSharedData ------- ', this.userSharedData)

    let storageUser = JSON.parse(localStorage.getItem(Constants.USER_STORAGE));

    if (storageUser && storageUser.accessToken) {
      console.log('there is user on top menu');
      this.user = JSON.parse(localStorage.getItem(Constants.USER_STORAGE));
      this.isUser = true;
    }

    if (this.userUpdate) {
      this.ngOnInit();
      console.log('this.userUpdate');
    }

  }

  toggleCollapse() {
    this.show = !this.show;
  }

  logOut() {
    localStorage.removeItem(Constants.USER_STORAGE);
    // this.sharedData.changeIsLogin(false);
    // this.sharedData.updatedDataSelection("123");
    this.isUser = false;
    this.router.navigateByUrl('/home');
    this.ngOnInit();
  }

}

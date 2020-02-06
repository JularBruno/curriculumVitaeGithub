import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecaptchaModule } from 'ng-recaptcha';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopmenuComponent } from './shared/topmenu/topmenu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ToastModule } from 'ng2-toastr';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ProgressComponent } from './shared/progress/progress.component';

import { HeaderTitleComponent } from './shared/header-title/header-title.component';

import { NgAutonumericModule } from '@angularfy/ng-autonumeric';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopmenuComponent,
    FooterComponent,
    ProgressComponent,
    HeaderTitleComponent,
  ],
  imports: [
    BrowserModule, HttpModule, LazyLoadImageModule,
    RouterModule.forRoot(routes),
    ModalModule.forRoot(),
    TypeaheadModule.forRoot(),
    CarouselModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastModule.forRoot(),
    RecaptchaModule.forRoot(),
    BsDropdownModule.forRoot(),
    NgAutonumericModule,
    AngularFontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

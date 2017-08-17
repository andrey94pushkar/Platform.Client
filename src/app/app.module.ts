// vendor
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk';
import {
  MaterialModule,
  MdNativeDateModule,
  MdRadioModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { ClickOutsideModule } from 'ng-click-outside';
import { HttpModule } from '@angular/http';
=======
/*import { ClickOutsideModule } from 'ng-click-outside';*/
>>>>>>> 491473db3eb3eaf0a2497a959128668775ec83cd

// common
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './_directives/navigation/navigation.component';
import { GridComponent } from './_directives/grid/grid.component';
import { AuthGuard } from './_guards/auth.guard';
import { AuthenticationService } from './_services/auth.service';

// pages
import {
  PublicComponent,
  PrivateComponent
} from './_layouts/index';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';



// services

@NgModule({
  declarations: [
    AppComponent,
    PrivateComponent,
    PublicComponent,
    NavigationComponent,
    GridComponent,
    DashboardComponent,
    LoginComponent,
    LandingComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MdNativeDateModule,
    MdRadioModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    CdkTableModule,
    ClickOutsideModule,
    HttpModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
=======
    CdkTableModule
    /*ClickOutsideModule*/
>>>>>>> 491473db3eb3eaf0a2497a959128668775ec83cd
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

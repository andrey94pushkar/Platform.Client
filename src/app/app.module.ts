// vendor
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClickOutsideModule } from 'ng-click-outside';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule, MdNativeDateModule, MdRadioModule } from '@angular/material';
import { PageSliderModule } from 'ng2-page-slider';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

// common
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './_directives/navigation/navigation.component';
import { AuthGuard } from './_guards/auth.guard';
import { DeleteDialogComponent } from './_directives/dialogs/index';


// pages
import { PublicComponent, PrivateComponent } from './_layouts/index';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent, SlideshowComponent } from './home/index';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent, InfoComponent, TestsComponent } from './profile/index';


// services
import { AuthenticationService, ProfileService } from './_services/index';

@NgModule({
  declarations: [
    AppComponent,
    PrivateComponent,
    PublicComponent,
    NavigationComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    SlideshowComponent,
    RegisterComponent,
    ProfileComponent,
    InfoComponent,
    TestsComponent,
    DeleteDialogComponent
  ],
  entryComponents: [
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MdNativeDateModule,
    MdRadioModule,
    BrowserAnimationsModule,
    CdkTableModule,
    ClickOutsideModule,
    HttpModule,
    PageSliderModule,
    Ng2PageScrollModule,
    FormsModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

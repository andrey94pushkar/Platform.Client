import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './_guards/auth.guard';
import { PublicComponent, PrivateComponent } from './_layouts/index';

const PUBLIC_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'landing', component: LandingComponent },
];

const PRIVATE_ROUTES: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
];

const ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', },
  { path: '', component: PublicComponent, children: PUBLIC_ROUTES },
  { path: '', component: PrivateComponent, canActivate: [AuthGuard], children: PRIVATE_ROUTES }
];



// const ROUTES: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: 'landing', component: LandingComponent },
//   { path: '', redirectTo: '/landing', pathMatch: 'full' },
//   { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
//   { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
//   // otherwise redirect to home
//   { path: '**', redirectTo: '' }
// ];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

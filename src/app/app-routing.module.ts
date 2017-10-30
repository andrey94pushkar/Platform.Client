import { TowerOfLondonComponent } from './tower-of-london/tower-of-london.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './_guards/auth.guard';
import { PublicComponent, PrivateComponent } from './_layouts/index';

const PUBLIC_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
];

const PRIVATE_ROUTES: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'towerOfLondon', component: TowerOfLondonComponent, canActivate: [AuthGuard]}
];

const ROUTES: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full', },
  { path: '', component: PublicComponent, children: PUBLIC_ROUTES },
  { path: '', component: PrivateComponent, canActivate: [AuthGuard], children: PRIVATE_ROUTES },
  { path: '**', redirectTo: '/login', pathMatch: 'full', }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

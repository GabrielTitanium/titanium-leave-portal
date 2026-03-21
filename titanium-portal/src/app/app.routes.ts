import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // default redirect
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent }, // example protected route
    //{path: 'menu', component: MenuComponent},
    //{ path: 'profile', component: ProfileComponent },// example protected route
     // optional wildcard (404 fallback)
    { path: '**', redirectTo: 'login' }
];

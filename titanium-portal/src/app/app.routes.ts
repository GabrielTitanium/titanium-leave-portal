import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // default redirect
    { path: 'login', component: LoginComponent },
    {path: 'menu', component: MenuComponent},
    //{ path: 'profile', component: ProfileComponent },// example protected route
     // optional wildcard (404 fallback)
    { path: '**', redirectTo: 'login' }
];

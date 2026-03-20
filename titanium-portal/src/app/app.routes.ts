import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // default redirect
    { path: 'login', component: LoginComponent },
     // optional wildcard (404 fallback)
    { path: '**', redirectTo: 'login' }
];

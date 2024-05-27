import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect tới /login
    { path: 'login', component: LoginComponent },
    {path: 'register', component: RegisterComponent}
];

import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CentreComponent } from './components/centre/centre.component';
import { UserLayoutComponent } from './components/user-layout/user-layout.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
    { path: '', redirectTo: '/centre', pathMatch: 'full' }, // Redirect tới /login
    { path: 'login', component: LoginComponent },
    {path: 'register', component: RegisterComponent},
    {path: 'centre', component: CentreComponent },
    {path: 'user-layout', component: UserLayoutComponent},
    {path: 'nav-bar', component: NavBarComponent},
    {path: 'profile', component:ProfileComponent}
    
    
    
];

import { Routes } from '@angular/router';
import { RegistrarseComponent } from './user/registrarse/registrarse.component';
import { LoginComponent } from './login/login.component';
import { SuscribirseComponent } from './suscribirse/suscribirse/suscribirse.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent    
    },
    {
        path: 'registrarse',
        component: RegistrarseComponent      
    },
    {
        path: 'suscripcion',
        component: SuscribirseComponent      
    }
];

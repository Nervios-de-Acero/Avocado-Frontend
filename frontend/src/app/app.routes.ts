import { Routes } from '@angular/router';
import { RegistrarseComponent } from './user/registrarse/registrarse.component';
import { LoginComponent } from './login/login.component';
import { CardSuscribirseComponent } from './suscribirse/card-suscribirse/card-suscribirse.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent    
    },
    {
        path: 'registrarse',
        component: RegistrarseComponent      
    },{
        path: 'card',
        component: CardSuscribirseComponent      
    }
];

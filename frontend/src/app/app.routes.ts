import { Routes } from '@angular/router';
import { RegistrarseComponent } from './user/registrarse/registrarse.component';
import { LoginComponent } from './login/login.component';
import { CardRecetaComponent } from './receta/card-receta/card-receta.component';

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
        path: 'card',
        component: CardRecetaComponent      
    }
];

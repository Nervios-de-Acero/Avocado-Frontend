import { Routes } from '@angular/router';
import { RegistrarseComponent } from './user/registrarse/registrarse.component';
import { LoginComponent } from './login/login.component';
import { FeedComponent } from './feed/feed/feed.component';
import { VistaRecetaComponent } from './receta/vista-receta/vista-receta.component';

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
        path: 'feed',
        component: FeedComponent
    },
    {
        path: 'vista',
        component: VistaRecetaComponent
    }
];

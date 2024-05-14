import { Routes } from '@angular/router';
import { RegistrarseComponent } from './user/registrarse/registrarse.component';
import { LoginComponent } from './user/login/login.component';
import { LayoutComponent } from './user/layout/layout.component';
import { FeedComponent } from './feed/feed/feed.component';
import { VistaRecetaComponent } from './receta/vista-receta/vista-receta.component';
import { SuscribirseComponent } from './suscribirse/suscribirse/suscribirse.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
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

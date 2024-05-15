import { Routes } from '@angular/router';
import { RegistrarseComponent } from './user/registrarse/registrarse.component';
import { LoginComponent } from './user/login/login.component';
import { LayoutComponent } from './user/layout/layout.component';
import { FeedComponent } from './feed/feed/feed.component';
import { VistaRecetaComponent } from './receta/vista-receta/vista-receta.component';
import { SuscribirseComponent } from './suscribirse/suscribirse/suscribirse.component';

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
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'feed',
                component:FeedComponent,

            },
            {
                path: 'feed/:id',
                component: VistaRecetaComponent
            },
          {
            path: 'suscribirse',
            component: SuscribirseComponent
          }
        ]
    }
];

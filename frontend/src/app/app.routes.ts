import { Routes } from '@angular/router';
import { RegistrarseComponent } from './user/registrarse/registrarse.component';
import { LoginComponent } from './user/login/login.component';
import { LayoutComponent } from './user/layout/layout.component';
import { FeedComponent } from './feed/feed/feed.component';
import { VistaRecetaComponent } from './receta/vista-receta/vista-receta.component';
import { PerfilComponent } from './user/perfil/perfil.component';
import { SuscribirseComponent } from './suscribirse/suscribirse/suscribirse.component';
import { ContactoComponent } from './contacto/contacto/contacto.component';
import { SobreNosotrosComponent } from './acerca-de/sobre-nosotros/sobre-nosotros.component';
import { ContactoNLComponent } from './contacto/contacto-nl/contacto-nl.component';

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
        path: 'contactanos',
        component: ContactoNLComponent
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
                path: 'perfil',
                component: PerfilComponent
            },
            {
                path: 'suscribirse',
                component: SuscribirseComponent
            },
            {
                path: 'contacto',
                component: ContactoComponent
            },
            {
                path: 'sobrenosotros',
                component: SobreNosotrosComponent
            }

        ]
    }
];

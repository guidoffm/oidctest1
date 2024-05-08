import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AutoLoginPartialRoutesGuard } from 'angular-auth-oidc-client';
import { ContainerComponent } from './container/container.component';
import { UsersComponent } from './users/users.component';
import { InfoComponent } from './info/info.component';
import { LogoutComponent } from './logout/logout.component';
import { RadiusComponent } from './radius/radius.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'p',
        component: ContainerComponent,
        canActivate: [AutoLoginPartialRoutesGuard],
        children: [
            // {
            //     path: 'foo',
            //     component: FooComponent,
            // },
            // {
            //     path: 'bar',
            //     component: BarComponent,
            // },
            {
                path: 'users',
                component: UsersComponent,
            },
            {
                path: 'info',
                component: InfoComponent,
            },
            {
                path: 'radius',
                component: RadiusComponent,
            },
        ]
    },
    {
        path: 'logout',
        component: LogoutComponent,
    }
];

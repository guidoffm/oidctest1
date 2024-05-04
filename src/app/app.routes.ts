import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AutoLoginPartialRoutesGuard } from 'angular-auth-oidc-client';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';
import { ContainerComponent } from './container/container.component';
import { UsersComponent } from './users/users.component';
import { InfoComponent } from './info/info.component';
import { LogoutComponent } from './logout/logout.component';

export const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'home',
    //     pathMatch: 'full'
    // },
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'p',
                component: ContainerComponent,
                canActivate: [AutoLoginPartialRoutesGuard],
                children: [
                    // {
                    //     path: '',
                    //     component: HomeComponent,
                    //     // canActivate: [AutoLoginPartialRoutesGuard]
                    // },
                    {
                        path: 'foo',
                        component: FooComponent,
                    },
                    {
                        path: 'bar',
                        component: BarComponent,
                    },
                    {
                        path: 'users',
                        component: UsersComponent,
                    },
                    {
                        path: 'info',
                        component: InfoComponent,
                    },
                ]
            }
        ]
    },
    {
        path: 'logout',
        component: LogoutComponent,
    }
];

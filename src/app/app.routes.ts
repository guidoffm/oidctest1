import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AutoLoginPartialRoutesGuard } from 'angular-auth-oidc-client';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';
import { ContainerComponent } from './container/container.component';

export const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'home',
    //     pathMatch: 'full'
    // },
    {
        path: '',
        component: HomeComponent,
        // canActivate: [AutoLoginPartialRoutesGuard]
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
                        // canActivate: [AutoLoginPartialRoutesGuard]
                    },
                    {
                        path: 'bar',
                        component: BarComponent,
                        // canActivate: [AutoLoginPartialRoutesGuard]
                    },
                ]
            }
        ]
    }
];

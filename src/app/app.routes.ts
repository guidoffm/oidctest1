import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AutoLoginPartialRoutesGuard } from 'angular-auth-oidc-client';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';
import { CallbackComponent } from './callback/callback.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AutoLoginPartialRoutesGuard]
    },
    {
        path: 'foo',
        component: FooComponent,
        canActivate: [AutoLoginPartialRoutesGuard]
    },
    {
        path: 'bar',
        component: BarComponent,
        canActivate: [AutoLoginPartialRoutesGuard]
    },
    {
        path: 'callback',
        component: CallbackComponent
    }
];

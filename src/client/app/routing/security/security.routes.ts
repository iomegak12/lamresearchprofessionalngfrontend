import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SigninComponent } from '../../components/signin/signin.component';

let securityRoutes: Route[] =
    [
        {
            path: 'sign-in', component: SigninComponent
        }
    ];

let securityRouteDefinitions: ModuleWithProviders =
    RouterModule.forRoot(securityRoutes, {
        useHash: false
    });

export {
    securityRouteDefinitions
};

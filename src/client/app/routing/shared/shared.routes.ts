import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from '../../components/home/home.component';
import { AboutUsComponent } from '../../components/aboutus/aboutus.component';
import { SigninComponent } from '../../components/signin/signin.component';

let sharedRoutes: Route[] =
    [
        {
            path: 'home', component: HomeComponent
        },
        {
            path: 'about-us', component: AboutUsComponent
        },
        {
            path: 'sign-in', component: SigninComponent
        },
        {
            path: '',
            redirectTo: '/home',
            pathMatch: 'full'
        }
    ];

let sharedRouteDefinitions: ModuleWithProviders =
    RouterModule.forRoot(sharedRoutes, {
        useHash: false
    });

export {
    sharedRouteDefinitions
};

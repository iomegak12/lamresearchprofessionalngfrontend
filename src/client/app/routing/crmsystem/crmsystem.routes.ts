import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CrmSystemComponent } from '../../components/crmsystem/crmsystem.component';

let crmSystemRoutes: Route[] =
    [
        {
            path: 'crm-system', component: CrmSystemComponent
        }
    ];

let crmSystemRouteDefinitions: ModuleWithProviders =
    RouterModule.forRoot(crmSystemRoutes, {
        useHash: false
    });

export {
    crmSystemRouteDefinitions
};

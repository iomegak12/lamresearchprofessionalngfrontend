import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CrmSystemComponent } from '../../components/crmsystem/crmsystem.component';
import { NewCustomerComponent } from '../../components/newcustomer/newcustomer.component';

let crmSystemRoutes: Route[] =
    [
        {
            path: 'crm-system', component: CrmSystemComponent
        },
        {
            path: 'new-customer', component: NewCustomerComponent
        }
    ];

let crmSystemRouteDefinitions: ModuleWithProviders =
    RouterModule.forRoot(crmSystemRoutes, {
        useHash: false
    });

export {
    crmSystemRouteDefinitions
};

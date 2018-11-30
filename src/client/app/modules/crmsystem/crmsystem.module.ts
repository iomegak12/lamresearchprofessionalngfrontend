import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BASE_SERVICE_URL_TOKEN, CustomerService } from "../../services/customers/customers.service";
import { CrmSystemComponent, CUSTOMER_SERVICE_TOKEN } from "../../components/crmsystem/crmsystem.component";
import { crmSystemRouteDefinitions } from "../../routing/crmsystem/crmsystem.routes";

const MODULE_DEF: any = {
    imports: [
        HttpClientModule,
        crmSystemRouteDefinitions
    ],
    declarations: [
        CrmSystemComponent
    ],
    providers: [
        {
            provide: BASE_SERVICE_URL_TOKEN,
            useFactory: () => {
                let serviceBaseUrl: string =
                    String('<%= BASE_CUSTOMER_SERVICE_URL %>');

                return serviceBaseUrl;
            }
        },
        {
            provide: CUSTOMER_SERVICE_TOKEN,
            useClass: CustomerService
        }
    ]
};

@NgModule(MODULE_DEF)
class CrmSystemModule {
    constructor() {
        console.log('CRM System Module Initialized!');
    }
}

export {
    CrmSystemModule
};

import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BASE_SERVICE_URL_TOKEN, CustomerService } from "../../services/customers/customers.service";
import { CrmSystemComponent, CUSTOMER_SERVICE_TOKEN } from "../../components/crmsystem/crmsystem.component";
import { crmSystemRouteDefinitions } from "../../routing/crmsystem/crmsystem.routes";
import { CustomerViewerComponent } from "../../components/customerviewer/customerviewer.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhotoUrlPipe } from "../../pipes/photourl/photourl.pipe";
import { StringTrimPipe } from "../../pipes/strtrim/strtrim.pipe";
import { CustomerDetailViewerComponent } from "../../components/customerdetailviewer/customerdetailviewer.component";
import { SymbolPipe } from "../../pipes/symbol/symbol.pipe";
import { SearchPanelComponent } from "../../components/searchpanel/searchpanel.component";
import { WherePipe } from "../../pipes/where/where.pipe";
import { SecurityModule } from "../security/security.module";
import { NewCustomerComponent } from "../../components/newcustomer/newcustomer.component";

const MODULE_DEF: any = {
    imports: [
        HttpClientModule,
        CommonModule, FormsModule, SecurityModule,
        ReactiveFormsModule,
        crmSystemRouteDefinitions
    ],
    declarations: [
        CrmSystemComponent,
        CustomerViewerComponent,
        CustomerDetailViewerComponent, SearchPanelComponent,
        NewCustomerComponent,
        PhotoUrlPipe, StringTrimPipe, SymbolPipe, WherePipe
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

import { OnInit, Inject, InjectionToken, Component } from "@angular/core";
import { ICustomerService } from "../../services/customers/icustomers.service";
import { Customer } from "../../models/crmsystem/customer";

const CUSTOMER_SERVICE_TOKEN: InjectionToken<ICustomerService> =
    new InjectionToken<ICustomerService>('customerService');
const INVALID_CUSTOMER_SERVICE = 'Invalid Customer Service Specified!';

const COMPONENT_DEF: any = {
    moduleId: module.id,
    templateUrl: 'crmsystem.component.html',
    styleUrls: ['crmsystem.component.css'],
    selector: 'crmsystem'
};

@Component(COMPONENT_DEF)
class CrmSystemComponent implements OnInit {
    public isLoading: boolean;
    public customers: Customer[] = [];
    public errorMessage: string;

    constructor(@Inject(CUSTOMER_SERVICE_TOKEN) private customerService: ICustomerService) {
        if (this.customerService === null) {
            throw new Error(INVALID_CUSTOMER_SERVICE);
        }
    }

    ngOnInit() {
        this.isLoading = true;

        this.customerService
            .getCustomers()
            .subscribe(
                customers => this.customers = customers,
                error => this.errorMessage = `Error Occurred, Details : ${JSON.stringify(error)}`,
                () => this.isLoading = false);
    }
}

export {
    CUSTOMER_SERVICE_TOKEN,
    CrmSystemComponent
};

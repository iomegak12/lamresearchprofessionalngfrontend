import { Component, Inject } from "@angular/core";
import { customerFormModel } from './newcustomer.model';
import { FormGroup } from "@angular/forms";
import { ICustomerService } from "../../services/customers/icustomers.service";
import { CUSTOMER_SERVICE_TOKEN } from "../crmsystem/crmsystem.component";
import { Router } from "@angular/router";

const INVALID_CUSTOMER_SERVICE = 'Invalid Customer Service Specified!';
const INVALID_ROUTER_SERVICE = 'Invalid Router Service Specified!';
const HOME_VIEW = 'home';

@Component({
    moduleId: module.id,
    selector: 'crmsystem-newcustomer',
    templateUrl: 'newcustomer.component.html',
    styleUrls: ['newcustomer.component.css']
})
class NewCustomerComponent {
    public customerForm: FormGroup = customerFormModel;
    public errorMessage: string;
    public isProcessing: boolean = false;

    constructor(@Inject(CUSTOMER_SERVICE_TOKEN) private customerService: ICustomerService,
        private routerService: Router) {
        if (this.customerService == null) {
            throw new Error(INVALID_CUSTOMER_SERVICE);
        }

        if (this.routerService == null) {
            throw new Error(INVALID_ROUTER_SERVICE);
        }

        console.log('NewCustomer Component Initialized!');
    }

    save() {
        if (this.customerForm.valid) {
            let customerRecord = this.customerForm.value;

            this.isProcessing = true;
            this.customerService
                .saveCustomerRecord(customerRecord)
                .subscribe(
                    status => {
                        this.isProcessing = false;
                        this.routerService.navigate([HOME_VIEW]);
                    },
                    error => this.errorMessage = `Error Occurred, Details : ${error.message}`);
        }
    }
}

export {
    NewCustomerComponent
};

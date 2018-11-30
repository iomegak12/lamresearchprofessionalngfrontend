import { Customer } from "../../models/crmsystem/customer";
import { ICustomerService } from "./icustomers.service";
import { Observable } from "rxjs";
import { InjectionToken, Inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';

const INVALID_SERVICE_URL = 'Invalid Customer Service Base Url Specified!';
const INVALID_HTTP_CLIENT = 'Invalid Http Client Service Specified!';
const BASE_SERVICE_URL_TOKEN: InjectionToken<string> = new InjectionToken<string>('serviceBaseUrl');

class CustomerService implements ICustomerService {
    private customerServiceUrl: string;

    constructor(@Inject(BASE_SERVICE_URL_TOKEN) serviceBaseUrl: string,
        private httpService: HttpClient) {
        if (serviceBaseUrl === null) {
            throw new Error(INVALID_SERVICE_URL);
        }

        this.customerServiceUrl = `${serviceBaseUrl}/api/customers`;
    }

    getCustomers(): Observable<Customer[]> {
        if (this.httpService === null) {
            throw new Error(INVALID_HTTP_CLIENT);
        }

        let result = this.httpService.get<Customer[]>(this.customerServiceUrl);

        return result;
    }
}

export {
    BASE_SERVICE_URL_TOKEN,
    CustomerService
};

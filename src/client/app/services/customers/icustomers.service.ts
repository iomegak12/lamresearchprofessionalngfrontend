import { Observable } from "rxjs";
import { Customer } from "../../models/crmsystem/customer";

interface ICustomerService {
    getCustomers(): Observable<Customer[]>;
    saveCustomerRecord(customerRecord: Customer): Observable<boolean>;
}

export {
    ICustomerService
};

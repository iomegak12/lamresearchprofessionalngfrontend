import { OnInit, Inject, InjectionToken, Component, OnChanges } from "@angular/core";
import { ICustomerService } from "../../services/customers/icustomers.service";
import { Customer } from "../../models/crmsystem/customer";
import { IPushNotificationsService, PUSH_NOTIFICATIONS_SERVICE_TOKEN } from "../../services/pushnotifications/ipushnotifications.service";
import { USER_PROFILE_SERVICE_TOKEN, IUserProfileService } from "../../services/userprofile/iuserprofile.service";
import { Router } from "@angular/router";

const CUSTOMER_SERVICE_TOKEN: InjectionToken<ICustomerService> =
    new InjectionToken<ICustomerService>('customerService');
const INVALID_CUSTOMER_SERVICE = 'Invalid Customer Service Specified!';
const INVALID_PUSH_NOFICIATIONS_SERVICE = 'Invalid Push NotificationsService Specified!';
const INVALID_USER_PROFILE_SERVICE = 'Invalid User Profile Service Specified!';

const NEW_CUSOTMER_RECORD_EVENT = 'NewCustomerRecord';
const LOGIN_VIEW = 'sign-in';

const COMPONENT_DEF: any = {
    moduleId: module.id,
    templateUrl: 'crmsystem.component.html',
    styleUrls: ['crmsystem.component.css'],
    selector: 'crmsystem'
};

@Component(COMPONENT_DEF)
class CrmSystemComponent implements OnInit, OnChanges {
    public isLoading: boolean;
    public customers: Customer[] = [];
    public errorMessage: string;

    constructor(
        @Inject(CUSTOMER_SERVICE_TOKEN) private customerService: ICustomerService,
        @Inject(PUSH_NOTIFICATIONS_SERVICE_TOKEN) private pushNotificationsService: IPushNotificationsService,
        @Inject(USER_PROFILE_SERVICE_TOKEN) private userProfileService: IUserProfileService,
        private routerService: Router) {
        if (this.customerService === null) {
            throw new Error(INVALID_CUSTOMER_SERVICE);
        }

        if (this.pushNotificationsService == null) {
            throw new Error(INVALID_PUSH_NOFICIATIONS_SERVICE);
        }

        if (this.userProfileService === null) {
            throw new Error(INVALID_USER_PROFILE_SERVICE);
        }
    }

    private verifyAuthenticationStatus() {
        if (!this.userProfileService.authenticationStatus) {
            this.routerService.navigate([LOGIN_VIEW]);
        }
    }

    ngOnChanges() {
        this.verifyAuthenticationStatus();
    }

    ngOnInit() {
        this.verifyAuthenticationStatus();

        let notificationCallback = {
            callback: (notificationMessage: any) => {
                if (notificationMessage !== null) {
                    let customer = new Customer(
                        notificationMessage.customerId, notificationMessage.customerName,
                        notificationMessage.address, notificationMessage.email, notificationMessage.phone,
                        notificationMessage.credit, notificationMessage.status, notificationMessage.remarks);

                    this.customers = [... this.customers, customer];
                }
            }
        };

        this.pushNotificationsService.subscribe(NEW_CUSOTMER_RECORD_EVENT, notificationCallback);
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

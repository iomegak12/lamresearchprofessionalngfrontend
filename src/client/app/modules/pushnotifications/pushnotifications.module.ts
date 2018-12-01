import { NgModule } from "@angular/core";
import { NOTIFICATION_SERVICE_URL_TOKEN } from "../../services/pushnotifications/pushnotifications.service";

@NgModule({
    imports: [],
    declarations: [],
    exports: [],
    providers: [
        {
            provide: NOTIFICATION_SERVICE_URL_TOKEN,
            useFactory: () => {
                let notificationServiceUrl = String('<%= NOTIFICATION_SERVICE_URL %>');

                return notificationServiceUrl;
            }
        }
    ]
})
class PushNotificationsModule {
    constructor() {
        console.info('Push Notifications Module Initialized!');
    }
}

export {
    PushNotificationsModule
};

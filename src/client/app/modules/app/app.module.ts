import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { BootComponent } from "../../components/boot/boot.component";
import { SharedModule } from "../shared/shared.module";
import { CrmSystemModule } from "../crmsystem/crmsystem.module";
import { PUSH_NOTIFICATIONS_SERVICE_TOKEN } from "../../services/pushnotifications/ipushnotifications.service";
import { PushNotificationsService } from "../../services/pushnotifications/pushnotifications.service";
import { PushNotificationsModule } from "../pushnotifications/pushnotifications.module";
import { SecurityModule } from "../security/security.module";

const MODULE_DEF: any = {
    imports: [
        BrowserModule,
        SharedModule,
        PushNotificationsModule,
        SecurityModule,
        CrmSystemModule
    ],
    exports: [],
    declarations: [BootComponent],
    bootstrap: [BootComponent],
    providers: [
        {
            provide: PUSH_NOTIFICATIONS_SERVICE_TOKEN,
            useClass: PushNotificationsService
        }
    ]
};


@NgModule(MODULE_DEF)
class AppModule {
    constructor() {
        console.info('Application Module Initialized!');
    }
}

export {
    AppModule
};

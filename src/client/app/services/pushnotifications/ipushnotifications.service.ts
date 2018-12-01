import { INotificationCallback } from "./inotification-callback";
import { InjectionToken } from "@angular/core";

const PUSH_NOTIFICATIONS_SERVICE_TOKEN: InjectionToken<IPushNotificationsService> =
    new InjectionToken<IPushNotificationsService>('pushNotificationsService');

interface IPushNotificationsService {
    subscribe(eventName: string, callback: INotificationCallback): void;
}

export {
    IPushNotificationsService,
    PUSH_NOTIFICATIONS_SERVICE_TOKEN
};

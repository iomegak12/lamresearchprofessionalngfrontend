import { IPushNotificationsService } from "./ipushnotifications.service";
import { INotificationCallback } from "./inotification-callback";
import { InjectionToken, Inject } from "@angular/core";

declare class io {
    static connect(serviceUrl: string): any;
}

const NOTIFICATION_SERVICE_URL_TOKEN: InjectionToken<string> = new InjectionToken<string>('notificationServiceUrl');
const INVALID_ARGUMENTS = 'Invalid Argument(s) Specified!';

class PushNotificationsService implements IPushNotificationsService {
    private registeredSubscribers: Map<string, INotificationCallback[]>;
    private socketClient: any;

    constructor(@Inject(NOTIFICATION_SERVICE_URL_TOKEN) private notificationServiceUrl: string) {
        if (notificationServiceUrl == null) {
            throw new Error(INVALID_ARGUMENTS);
        }

        this.registeredSubscribers = new Map<string, INotificationCallback[]>();
        this.socketClient = io.connect(this.notificationServiceUrl);
    }

    subscribe(eventName: string, callback: INotificationCallback) {
        let validation = eventName != null && callback != null;

        if (!validation)
            throw new Error(INVALID_ARGUMENTS);

        let isEventExist = this.registeredSubscribers.has(eventName);
        let subscribers: INotificationCallback[];

        if (!isEventExist) {
            subscribers = [];

            this.registeredSubscribers.set(eventName, subscribers);

            this.socketClient.on(eventName, (notificationMessage: any) => {
                let eventSubscribers = this.registeredSubscribers.get(eventName);
                
                for(let subscriber of eventSubscribers) {
                    subscriber.callback(notificationMessage);
                }
            });
        } else { subscribers = this.registeredSubscribers.get(eventName); }

        subscribers.push(callback);
    }
}

export {
    NOTIFICATION_SERVICE_URL_TOKEN,
    PushNotificationsService
};

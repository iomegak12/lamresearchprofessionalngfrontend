import { IUserProfileService } from "./iuserprofile.service";
import { InjectionToken } from "@angular/core";

interface IUserProfileBroadcasterService extends IUserProfileService {
    broadcast(userName: string, loginTime: Date, authenticationStatus: boolean): void;
}

const USER_PROFILE_BROADCASTER_SERVICE_TOKEN: InjectionToken<IUserProfileBroadcasterService> =
    new InjectionToken<IUserProfileBroadcasterService>('userProfileBroadcasterService');

export {
    USER_PROFILE_BROADCASTER_SERVICE_TOKEN,
    IUserProfileBroadcasterService
};

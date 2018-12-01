import { Subject } from "rxjs";
import { InjectionToken } from "@angular/core";

interface IUserProfileService {
    userName: string;
    loginTime: Date;
    authenticationStatus: boolean;
    broadcaster: Subject<any>;

    signout(): void;
}

const USER_PROFILE_SERVICE_TOKEN: InjectionToken<IUserProfileService> =
    new InjectionToken<IUserProfileService>('userProfileService');

export {
    USER_PROFILE_SERVICE_TOKEN,
    IUserProfileService
};

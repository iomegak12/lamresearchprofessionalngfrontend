import { IUserProfileBroadcasterService } from "./iuserprofilebroadcaster.service";
import { Subject } from "rxjs";
import { Inject } from "@angular/core";
import { TOKEN_STORAGE_SERVICE_TOKEN, ITokenStorageService } from "../tokenstorage/itokenstorage.service";
import { Router } from "@angular/router";

const INVALID_DEPENDENCY_SERVICES = 'Invalid Dependency Service(s) Specified!';
const HOME_VIEW = 'home';

class UserProfileService implements IUserProfileBroadcasterService {
    private loggedInUserName: string;
    private loggedInTime: Date;
    private loggedInStatus: boolean;
    private loginBroadcaster: Subject<any>;

    constructor(
        @Inject(TOKEN_STORAGE_SERVICE_TOKEN) private tokenStorageService: ITokenStorageService,
        private routerService: Router) {

        let validation = this.tokenStorageService != null &&
            this.routerService != null;

        if (!validation)
            throw new Error(INVALID_DEPENDENCY_SERVICES);

        this.loginBroadcaster = new Subject<any>();
    }

    public get userName() {
        return this.loggedInUserName;
    }

    public get loginTime() {
        return this.loggedInTime;
    }

    public get authenticationStatus() {
        return this.loggedInStatus;
    }

    public get broadcaster() {
        return this.loginBroadcaster;
    }

    broadcast(userName: string, loginTime: Date, authenticationStatus: boolean): void {
        [
            this.loggedInUserName,
            this.loggedInTime,
            this.loggedInStatus
        ] = [userName, loginTime, authenticationStatus];

        this.broadcaster.next({
            userName,
            loginTime,
            authenticationStatus
        });
    }

    signout(): void {
        this.loggedInStatus = false;
        this.tokenStorageService.removeToken();
        
        this.broadcaster.next({
            userName: this.loggedInUserName,
            loginTime: new Date(),
            authenticationStatus: false
        });

        this.routerService.navigate([HOME_VIEW]);
    }
}

export {
    UserProfileService
};

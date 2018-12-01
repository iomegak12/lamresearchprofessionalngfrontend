import { Component, Input, Inject, inject } from "@angular/core";
import { IAuthenticationService, AUTH_SERVICE_TOKEN } from "../../services/authentication/iauthentication.service";
import { ITokenStorageService, TOKEN_STORAGE_SERVICE_TOKEN } from "../../services/tokenstorage/itokenstorage.service";
import { IAuthenticationResult } from "../../services/authentication/iauthentication-result";
import { Router } from "@angular/router";
import { USER_PROFILE_BROADCASTER_SERVICE_TOKEN, IUserProfileBroadcasterService } from "../../services/userprofile/iuserprofilebroadcaster.service";

const INVALID_DEPENDENCY_SERVICES = 'Invalid Dependency Service Argument(s) Specified!';
const HOME_VIEW = 'home';

@Component({
    moduleId: module.id,
    selector: 'shared-signin',
    templateUrl: 'signin.component.html',
    styleUrls: ['signin.component.css']
})
class SigninComponent {
    @Input() public userName: string;
    @Input() public password: string;

    public errorMessage: string = '';
    public status: boolean = false;

    constructor(
        @Inject(AUTH_SERVICE_TOKEN)
        private authenticationService: IAuthenticationService,
        @Inject(TOKEN_STORAGE_SERVICE_TOKEN)
        private tokenStorageService: ITokenStorageService,
        @Inject(USER_PROFILE_BROADCASTER_SERVICE_TOKEN)
        private userProfileBroadcasterService: IUserProfileBroadcasterService,
        private routerService: Router) {
        console.log('Signin Component Initialized!');

        let validation = this.authenticationService !== null &&
            this.tokenStorageService !== null && this.routerService !== null &&
            this.userProfileBroadcasterService !== null;

        if (!validation)
            throw new Error(INVALID_DEPENDENCY_SERVICES);
    }

    login() {
        this.status = false;
        this.authenticationService
            .authenticate(this.userName, this.password)
            .subscribe(
                (authenticationResult: IAuthenticationResult) => {
                    if (authenticationResult.token) {
                        this.status = true;
                        this.tokenStorageService.setToken(authenticationResult.token);
                        this.userProfileBroadcasterService.broadcast(
                            this.userName, new Date(), this.status);
                        this.routerService.navigate([HOME_VIEW]);
                    }
                },
                error => {
                    this.errorMessage = `Error Occurred, Login Failed ... Details : ${error.message}`;
                });
    }
}

export {
    SigninComponent
};

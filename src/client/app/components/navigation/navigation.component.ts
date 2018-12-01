import { Component, Inject } from "@angular/core";
import { USER_PROFILE_SERVICE_TOKEN, IUserProfileService } from "../../services/userprofile/iuserprofile.service";

const INVALID_DEPENDENCY_SERVICE = 'Invalid Dependency Service(s) Specified!';

@Component({
    moduleId: module.id,
    selector: 'shared-navigation',
    templateUrl: 'navigation.component.html',
    styleUrls: ['navigation.component.css']
})
class NavigationComponent {
    public userName: string;
    public loginStatus: boolean;
    public loginTime: Date;
    public errorMessage: string;

    constructor(@Inject(USER_PROFILE_SERVICE_TOKEN) private userProfileService: IUserProfileService) {
        if (this.userProfileService == null) {
            throw new Error(INVALID_DEPENDENCY_SERVICE);
        }

        this.userProfileService
            .broadcaster
            .subscribe(
                message => {
                    this.userName = message.userName;
                    this.loginStatus = message.authenticationStatus;
                    this.loginTime = message.loginTime;
                    this.errorMessage = '';
                },
                error => this.errorMessage = `Error Occurred, Details : ${error.message}`);

        console.log('Navigation Component Initialized!');
    }

    logout() {
        this.userProfileService.signout();
    }
}

export {
    NavigationComponent
};

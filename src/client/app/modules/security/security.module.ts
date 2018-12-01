import { SigninComponent } from "../../components/signin/signin.component";
import { NgModule, Inject } from "@angular/core";
import { securityRouteDefinitions } from "../../routing/security/security.routes";
import { AuthenticationService, AUTH_SERVICE_URL_TOKEN } from "../../services/authentication/authentication.service";
import { AUTH_SERVICE_TOKEN } from "../../services/authentication/iauthentication.service";
import { TokenStorageService } from "../../services/tokenstorage/tokenstorage.service";
import { TOKEN_STORAGE_SERVICE_TOKEN, ITokenStorageService } from "../../services/tokenstorage/itokenstorage.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthorizationHttpInterceptor } from "../../interceptors/authorization/auth-interceptor";
import { USER_PROFILE_SERVICE_TOKEN } from "../../services/userprofile/iuserprofile.service";
import { UserProfileService } from "../../services/userprofile/userprofile.service";
import { USER_PROFILE_BROADCASTER_SERVICE_TOKEN } from "../../services/userprofile/iuserprofilebroadcaster.service";

const MODULE_DEF: any = {
    imports: [
        CommonModule,
        FormsModule,
        securityRouteDefinitions
    ],
    declarations: [
        SigninComponent
    ],
    providers: [
        {
            provide: AUTH_SERVICE_TOKEN,
            useClass: AuthenticationService
        },
        {
            provide: AUTH_SERVICE_URL_TOKEN,
            useFactory: () => {
                let authenticationServiceUrl = String('<%= AUTH_SERVICE_URL %>');

                return authenticationServiceUrl;
            }
        },
        {
            provide: TOKEN_STORAGE_SERVICE_TOKEN,
            useClass: TokenStorageService
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthorizationHttpInterceptor,
            multi: true
        },
        {
            provide: USER_PROFILE_SERVICE_TOKEN,
            useClass: UserProfileService
        },
        {
            provide: USER_PROFILE_BROADCASTER_SERVICE_TOKEN,
            useExisting: USER_PROFILE_SERVICE_TOKEN
        }
    ]
};

@NgModule(MODULE_DEF)
class SecurityModule {
    constructor(@Inject(TOKEN_STORAGE_SERVICE_TOKEN) private tokenStorageService: ITokenStorageService) {
        if (this.tokenStorageService !== null) {
            this.tokenStorageService.removeToken();
        }
        console.log('Security Module Initialized!');
    }
}

export {
    SecurityModule
};

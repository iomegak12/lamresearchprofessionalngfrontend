import { IAuthenticationService } from "./iauthentication.service";
import { Inject, InjectionToken } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IAuthenticationResult } from "./iauthentication-result";
import { Observable } from "rxjs";

const INVALID_ARGUMENTS = 'Invalid Argument(s) Specified!';
const AUTH_SERVICE_URL_TOKEN: InjectionToken<string> =
    new InjectionToken<string>('authenticationServiceUrl');

class AuthenticationService implements IAuthenticationService {
    constructor(
        @Inject(AUTH_SERVICE_URL_TOKEN) private authenticationServiceUrl: string,
        private httpService: HttpClient) {
    }

    authenticate(userName: string, password: string): Observable<IAuthenticationResult> {
        let validation = this.authenticationServiceUrl !== null &&
            this.httpService !== null;

        if (!validation)
            throw new Error(INVALID_ARGUMENTS);

        let result = this.httpService.post<IAuthenticationResult>(
            this.authenticationServiceUrl, {
                userName,
                password
            });

        return result;
    }
}

export {
    AUTH_SERVICE_URL_TOKEN,
    AuthenticationService
};

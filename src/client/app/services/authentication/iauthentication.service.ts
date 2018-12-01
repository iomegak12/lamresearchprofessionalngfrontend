import { Observable } from "rxjs";
import { InjectionToken } from "@angular/core";
import { IAuthenticationResult } from "./iauthentication-result";

interface IAuthenticationService {
    authenticate(userName: string, password: string): Observable<IAuthenticationResult>;
}

const AUTH_SERVICE_TOKEN: InjectionToken<IAuthenticationService> = 
    new InjectionToken<IAuthenticationService>('authenticationService');

export {
    AUTH_SERVICE_TOKEN,
    IAuthenticationService
};

import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Inject } from "@angular/core";
import { TOKEN_STORAGE_SERVICE_TOKEN, ITokenStorageService } from "../../services/tokenstorage/itokenstorage.service";

const INVALID_DEPENDENCY_SERVICE = 'Invalid Dependency Service Specified!';
const AUTHORIZATION_KEY = 'Authorization';
const BEARER = 'Bearer';

class AuthorizationHttpInterceptor implements HttpInterceptor {
    constructor(@Inject(TOKEN_STORAGE_SERVICE_TOKEN) private tokenStorageService: ITokenStorageService) {
        if (this.tokenStorageService === null) {
            throw new Error(INVALID_DEPENDENCY_SERVICE);
        }
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = this.tokenStorageService.getToken();
        let nextRequest: HttpRequest<any> = req;

        if (token !== null && token !== '') {
            nextRequest = req.clone({
                setHeaders: {
                    "Authorization": `${BEARER} ${token}`
                }
            });
        }

        return next.handle(nextRequest);
    }
}

export {
    AuthorizationHttpInterceptor
};

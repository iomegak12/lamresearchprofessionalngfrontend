import { InjectionToken } from "@angular/core";

interface ITokenStorageService {
    setToken(token: string): void;
    getToken(): string;
    removeToken(): void;
}

const TOKEN_STORAGE_SERVICE_TOKEN: InjectionToken<ITokenStorageService> =
    new InjectionToken<ITokenStorageService>('tokenStorageService');

export {
    TOKEN_STORAGE_SERVICE_TOKEN,
    ITokenStorageService
};


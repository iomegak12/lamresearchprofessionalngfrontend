import { ITokenStorageService } from "./itokenstorage.service";

const TOKEN_KEY = 'lamatk';

class TokenStorageService implements ITokenStorageService {
    getToken(): string {
        let token = window.localStorage.getItem(TOKEN_KEY);

        return token;
    }

    setToken(token: string): void {
        window.localStorage.setItem(TOKEN_KEY, token);
    }

    removeToken(): void {
        window.localStorage.removeItem(TOKEN_KEY);
    }
}

export {
    TokenStorageService
};

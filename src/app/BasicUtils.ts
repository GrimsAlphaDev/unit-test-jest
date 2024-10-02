import { IauthData } from "./authData";

export function product(a: number, b:number): number {
    return a * b;
} 

export function authenticateUser(username: string, password: string) : IauthData {
    const authStatus = username === 'developer' && password === 'dev';
    return {
        usernameToLower: username.toLowerCase(),
        usernameCharacters: username.split(''),
        userDetails: {
            username,
        },
        isAuthenticate: authStatus
    }
}


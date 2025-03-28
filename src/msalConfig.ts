import { Configuration, PublicClientApplication } from "@azure/msal-browser";

export const msalConfig: Configuration = {
    auth: {
        clientId: "CLIENT_ID",
        authority: "https://login.microsoftonline.com/TENANT_ID",
        redirectUri: "http://localhost:3000/",
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false
    }
};

export const loginRequest = {
    scopes: ["openid", "profile", "User.Read", "User.Read.All"]
};

export const msalInstance = new PublicClientApplication(msalConfig);
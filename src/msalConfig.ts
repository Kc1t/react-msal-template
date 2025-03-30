import { Configuration, PublicClientApplication } from "@azure/msal-browser";

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const TENANT_ID = import.meta.env.VITE_TENANT_ID;
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI || "http://localhost:3000/";

export const msalConfig: Configuration = {
    auth: {
        clientId: CLIENT_ID,
        authority: `https://login.microsoftonline.com/${TENANT_ID}`,
        redirectUri: REDIRECT_URI,
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
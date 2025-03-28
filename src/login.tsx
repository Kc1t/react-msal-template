import React, { useState } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./msalConfig";
import { Client } from "@microsoft/microsoft-graph-client";
import { AuthCodeMSALBrowserAuthenticationProvider } from "@microsoft/microsoft-graph-client/authProviders/authCodeMsalBrowser";
import { InteractionType, PublicClientApplication } from "@azure/msal-browser";

export const Login: React.FC = () => {
  const { instance, accounts } = useMsal();
  const [userInfo, setUserInfo] = useState<any | null>(null);

  const handleLogin = () => {
    instance.loginRedirect(loginRequest).catch((error) => {
      console.error("Login error:", error);
    });
  };

  const fetchUserInfo = async () => {
    if (accounts.length > 0) {
      const authProvider = new AuthCodeMSALBrowserAuthenticationProvider(instance as PublicClientApplication, {
        account: accounts[0],
        scopes: ["User.Read"],
        interactionType: InteractionType.Redirect,
      });

      const client = Client.initWithMiddleware({ authProvider });

      try {
        const user = await client.api("/me").get();
        setUserInfo(user); // Armazena todas as informações do usuário
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      }
    }
  };

  const fetchAccessToken = async () => {
    try {
      const tokenResponse = await instance.acquireTokenSilent({
        scopes: ["User.Read"],
        account: accounts[0],
      });
      console.log("Access Token:", tokenResponse.accessToken);
      return tokenResponse.accessToken;
    } catch (error) {
      console.error("Erro ao obter Access Token:", error);
    }
  };

  const fetchUserInfoWithAccessToken = async () => {
    const accessToken = await fetchAccessToken();
    if (accessToken) {
      const client = Client.init({
        authProvider: (done) => {
          done(null, accessToken);
        },
      });

      try {
        const user = await client.api("/me/memberOf").get();
        console.log("Informações do usuário:", user);
      } catch (error) {
        console.error("Erro ao buscar informações do usuário:", error);
      }
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login com Microsoft</button>
      {userInfo ? (
        <div>
          <h3>Informações do Usuário:</h3>
          <pre>{JSON.stringify(userInfo, null, 2)}</pre> {/* Exibe todas as informações em formato JSON */}
        </div>
      ) : (
        <>
          <button onClick={fetchUserInfo}>Obter Informações do Usuário</button>
          <button onClick={fetchUserInfoWithAccessToken}>teste</button>
        </>
      )}
    </div>
  );
};
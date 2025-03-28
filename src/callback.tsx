import React, { useEffect } from "react";
import { useMsal } from "@azure/msal-react";

export const Callback: React.FC = () => {
  const { instance } = useMsal();

  useEffect(() => {
    instance.handleRedirectPromise().then((response) => {
      if (response) {
        console.log("Login success:", response);
        // window.location.href = "/"; 
      }
    });
  }, [instance]);

  return <div>Processando login...</div>;
};
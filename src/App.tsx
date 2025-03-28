import React from "react";
import { MsalProvider } from "@azure/msal-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { msalInstance } from "./msalConfig";
import { Login } from "./login";
import { Callback } from "./cllback";

const App: React.FC = () => {
  return (
    <MsalProvider instance={msalInstance}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Callback />} />
        </Routes>
      </BrowserRouter>
    </MsalProvider>
  );
};

export default App;
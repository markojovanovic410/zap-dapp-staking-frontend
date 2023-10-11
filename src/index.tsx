import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RefreshContextProvider } from "contexts/RefreshContext";
import Web3WalletProvider from "wallets/wallet";
import Web3ContractsProvider from "web3/contracts";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RefreshContextProvider>
    <Web3WalletProvider>
      <Web3ContractsProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Web3ContractsProvider>
    </Web3WalletProvider>
  </RefreshContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

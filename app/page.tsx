"use client";
import React from "react";
import { MetaMaskProvider } from "@metamask/sdk-react";
import { ConnectWallet } from "./components/ConnectWallet";

export default function Home() {
  return (
    <MetaMaskProvider
      sdkOptions={{
        logging: { developerMode: true },
        checkInstallationImmediately: false,
        dappMetadata: {
          name: "MetaMask-login",
          url: window.location.href,
        },
      }}
    >
      <ConnectWallet />
    </MetaMaskProvider>
  );
}

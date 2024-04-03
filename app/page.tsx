"use client";
import React from "react";
import { MetaMaskProvider } from "@metamask/sdk-react";
import { ConnectWallet } from "./components/ConnectWallet";

export default function Home() {
  return (
    <MetaMaskProvider
      sdkOptions={{
        logging: { developerMode: false },
        checkInstallationImmediately: false,
        dappMetadata: {
          name: "MetaMask-login",
          url: process.env.NEXT_PUBLIC_APP_URL,
        },
      }}
    >
      <ConnectWallet />
    </MetaMaskProvider>
  );
}

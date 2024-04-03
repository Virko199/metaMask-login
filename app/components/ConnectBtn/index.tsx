import { Box, TextField } from "@mui/material";
import Image from "next/image";
import * as MetaMaskIcon from "../../../public/metaMask.svg";
import { useSDK } from "@metamask/sdk-react";
import { getMessageReq, signInReq, signUpReq } from "@/app/mocksAPI";
import { useState } from "react";
import { Button } from "../Button";

type Props = {
  isRegisterBtn?: boolean;
  handleConnected?: () => void;
};

export const ConnectBtn = ({
  isRegisterBtn = false,
  handleConnected,
}: Props) => {
  const [userName, setUserName] = useState("");
  const { sdk } = useSDK();

  const connect = async () => {
    try {
      if (!sdk || !window?.ethereum) {
        throw new Error("MetaMask is not installed");
      }

      const accounts: Array<string> = await sdk.connect();
      const account = accounts[0];

      if (!account) {
        throw new Error("No accounts found");
      }

      const { data: message } = await getMessageReq(account);
      const signature = await window.ethereum.request({
        method: "personal_sign",
        params: [message, account],
      });
      isRegisterBtn
        ? await signUpReq(account, signature as string, userName)
        : await signInReq(account, signature as string);

      handleConnected?.();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
        padding: "30px",
      }}
    >
      {isRegisterBtn && (
        <TextField
          variant="filled"
          sx={{ width: "100%", background: "rgba(255,255,255, 0.05)" }}
          inputProps={{ style: { color: "#fff" } }}
          value={userName}
          label="Enter user name"
          onChange={(e) => setUserName(e.target.value)}
        />
      )}
      <Button
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          margin: "0 auto",
        }}
        variant="contained"
        onClick={connect}
      >
        <Image src={MetaMaskIcon} alt="MetaMask icon" />
        METAMASK
      </Button>
    </Box>
  );
};

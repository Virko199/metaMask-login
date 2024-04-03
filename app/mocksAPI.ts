import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { generateRandomString } from "./utils/randomString";

const URL = "test.api";
const mockAxios = new MockAdapter(axios, {
  delayResponse: 1000,
});

mockAxios
  .onGet(new RegExp(`${URL}/eth/nonce*`))
  .reply(200, generateRandomString(Math.floor(Math.random() * 25)));
mockAxios.onPost(new RegExp(`${URL}/auth/metamask/sign-in`)).reply(200, "OK");

export const getMessageReq = async (walletAddress: string) =>
  axios.get(`${URL}/eth/nonce?walletAddress=${walletAddress}`);

export const signInReq = async (walletAddress: string, signature: string) =>
  axios.post("test.api/auth/metamask/sign-in", { walletAddress, signature });

export const signUpReq = async (
  walletAddress: string,
  signature: string,
  userName: string
) =>
  axios.post("test.api/auth/metamask/sign-in", {
    walletAddress,
    signature,
    userName,
  });

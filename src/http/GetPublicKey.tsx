import axios from "axios";
import { BASE_URL } from "../Contants";
import { getJwtString } from "../utils/GetJwt";

export async function getPublicKey(): Promise<string> {
  const endpoint = BASE_URL + "/getPublicKey";
  const jwtString = await getJwtString();
  const headers = {
    authorization: "Bearer " + jwtString, //--> don't forget the space " "
    "Content-Type": "application/json",
  };
  const res = await axios.post(endpoint, {}, { headers });
  const publicKey = res.data.publicKey as string;
  return publicKey;
}

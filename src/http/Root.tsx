import axios from "axios";

const urlPrefix = "http://localhost:10000";
const API_KEY = process.env.REACT_APP_API_KEY;

export async function rootEndpoint() {
  const res = await axios.get(urlPrefix);
  console.info(res.data);
}

//TODO: move this into its own file
export async function createSign(plainText?: string): Promise<string> {
  const endpoint = urlPrefix + "/createDigitalSignature";
  const headers = { "api-key": API_KEY, "Content-Type": "application/json" };
  const body = { plainText };
  const res = await axios.post(endpoint, body, { headers });
  const { signature } = res.data;
  return signature
}

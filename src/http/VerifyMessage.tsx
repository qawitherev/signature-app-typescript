import axios from "axios";
import { API_KEY, BASE_URL } from "../Contants";

export async function verifyMessage(message: string, signature: string, publicKey?: string): Promise<boolean> {
    const url = BASE_URL + '/verifyMessage'
    const headers = {'api-key': API_KEY}
    const body = {'stringData': message, 'stringSignature': signature}
    const res = await axios.post(url, body, {headers})
    const isLegit = res.data.isLegit as boolean
    return isLegit
}
import axios from "axios";
import { BASE_URL } from "../Contants";

export async function loginJwt() {
    const url = BASE_URL + 'loginJwt'
    const body = {userInfo: 'helloWorld'}
    const res = await axios.post(url, body)
    const {token} = res.data
    return token
}
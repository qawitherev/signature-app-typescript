/**
 * helper function to get jwt stored in localstorage
 * if null, call loginJwt endpoint and store the returned jwt
 */

import { loginJwt } from "../http/LoginJwt";
import { readValue, saveValue } from "./LocalStorage";

export async function getJwtString() {
    const jwtString = await readValue()
    if (jwtString) {
        return jwtString
    } else {
        try {
            const jwtString = await loginJwt()
            saveValue(jwtString)
            return jwtString
        } catch (err) {
            throw err
        }
    }
}
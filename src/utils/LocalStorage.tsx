/**
 * helper functions to interact with localStorage API on browser
 */

import { JWT_KEY } from "../Contants";

export async function readValue() {
    return localStorage.getItem(JWT_KEY)
}

/**
 * 
 * @param value if value is not string, cast it to string
 */
export async function saveValue(value: string) {
    localStorage.setItem(JWT_KEY, value)
}
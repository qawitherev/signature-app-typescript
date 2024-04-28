// import dotenv from 'dotenv'

// dotenv.config()

const API_KEY = process.env.REACT_APP_API_KEY as string
const BASE_URL = process.env.REACT_APP_BASE_URL as string
const JWT_KEY = process.env.REACT_APP_JWT_KEY as string

export {API_KEY, BASE_URL, JWT_KEY}
import axios from 'axios';
import adapter from 'axios/lib/adapters/http';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });
const fetcher = axios.create({
    adapter,
    auth: {
        username: process.env.BASE_AUTH_API_USER,
        password: process.env.BASE_AUTH_API_SECRET,
    },
    timeout: process.env.TIMEOUT ? Number(process.env.TIMEOUT) : 2000,
});

export default fetcher;

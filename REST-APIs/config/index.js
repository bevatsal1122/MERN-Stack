import dotenv from 'dotenv';

dotenv.config();

export const {
    PORT, DEVELOPER_MODE, DB, JWT_SECRET, REFRESH_TOKEN_SECRET, DOMAIN
} = process.env;

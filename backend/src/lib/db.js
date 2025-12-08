import mongoose from "mongoose";
import { ENV } from './env.js ';

export const DbConnection = async () => {
    try {
        const conn = await mongoose.connect(ENV.DB_URL);
        console.log(`${conn.connection.host} Mongoose is Connected 😇 `);

    } catch (error) {
        console.error("❌ no coonection Created", error);
        process.exit(1);
        // 0-- -> Success 1--->Failure
    }
};
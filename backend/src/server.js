import express from 'express';
import { ENV } from './lib/env.js';
import path from "path";
import { DbConnection } from './lib/db.js';
const app = express();
const _dir = path.resolve();

app.get('/health', (req, res) => {
    res.status(200).send({ health: "ok" });
});

if (ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(_dir, "../frontein/dist")));
    app.get("/{*any}", (req, res) => {
        res.sendFile(path.join(_dir, '../frontein', "dist", "index.html"));
    });
}


const startServer = async () => {
    try {
        await DbConnection();
        app.listen(ENV.PORT, () => {
            console.log(`server is running on Port ${ENV.PORT}`);
        });
    } catch (error) {
        console.log("Error in server ? ",error)
    }
};
startServer();
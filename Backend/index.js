import {app} from "./app.js";
import dotenv from "dotenv"
import connectionDB from "./db/index.js";
dotenv.config({
    path:"./.env"
})
connectionDB()
.then(() => {
    console.log("Database connected");
    app.listen(process.env.PORT, () => {   
        console.log(`Server is running on port ${process.env.PORT}`)
        }
    )})

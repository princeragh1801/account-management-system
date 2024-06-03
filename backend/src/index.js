import dotenv from "dotenv"
import { app } from "./app.js"
import { connectDB } from "./db.js"

dotenv.config({
    path : "./.env"
})

app.listen(process.env.PORT || 8000, (() => {
    console.log('Server is running on PORT ', 8000)
}))

app.on("error", ((error) => {
    console.log("Error occured while connecting to server ", error);
}))

connectDB();
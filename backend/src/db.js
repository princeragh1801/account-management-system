import mongoose from "mongoose";

const connectDB = async()=> {
    try {
        const connectionString = process.env.MONGODB_URI + process.env.DB_NAME;

        const connectionInstance = await mongoose.connect(connectionString);

        console.log("MongoDB is connected on ", connectionInstance.connection.host);
    } catch (error) {
        console.log("Error occured while connecting to database ", error)
    }
}

export {connectDB}
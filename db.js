import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connect to MongoDb: " + conn.connection.host);
  } catch (error) {
    console.error(error);
  }
};

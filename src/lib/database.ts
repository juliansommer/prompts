import mongoose from "mongoose"

let isConnected = false // track connection

export default async function connectToDB() {
  mongoose.set("strictQuery", true)

  if (isConnected) {
    console.log("MongoDB is already connected")
    return
  }

  try {
    const mongodbUri = process.env.MONGODB_URI || "" // Ensure the variable is defined
    await mongoose.connect(mongodbUri, {
      dbName: "share_prompt",
    })
    isConnected = true
    console.log("MongoDB connected")
  } catch (error) {
    console.log("MongoDB did not connect: ", error)
  }
}

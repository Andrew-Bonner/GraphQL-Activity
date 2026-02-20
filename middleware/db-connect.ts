import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { storeDocument } from "@/mongoose/weather/services";

async function dbConnect(): Promise<any | String> {
    const mongoServer = await MongoMemoryServer.create();
    const MONGOIO_URI = mongoServer.getUri();
    await mongoose.disconnect();

    let db = await mongoose.connect(MONGOIO_URI, {
        dbName: "Weather"
    });

    await storeDocument({
        zip: "99999",
        weather: "sunny",
        tempC: "30C",
        tempF: "70F",
        friends: ["44146","47304"]
    });

    await storeDocument({
        zip: "44146",
        weather: "rainy",
        tempC: "20C",
        tempF: "68F",
        friends: ["99999","47304"]
    });

    await storeDocument({
        zip: "47304",
        weather: "cloud",
        tempC: "30C",
        tempF: "86F",
        friends: ["44146","99999"]
    });
}
export default dbConnect;
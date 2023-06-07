import app from "./app.js";
import {connectDB} from "./config/database.js"
import cloudinary from "cloudinary";
import Razorpay from "razorpay";
import nodeCron from "node-cron";
import {Stats} from "./models/Stats.js";

connectDB();

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
    api_key: process.env.CLOUDINARY_CLIENT_API,
    api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
})

export const instance= new Razorpay({
    key_id:process.env.RAZORPAY_API_KEY,
    key_secret:process.env.RAZORPAY_API_SECRET,
})

nodeCron.schedule("0 0 0 1 * *", async ()=>{//0 sec 0 min 0 hr 1 din ko update hoga.
    try {
        await Stats.create({});
    } catch (error) {
        console.log(error);
    }
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});

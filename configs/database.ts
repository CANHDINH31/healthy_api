import mongoose from "mongoose";
import userModel from "../models/user.model";
import { configs } from "./configuration";

export const connectDB = async () => {
  try {
    await mongoose.connect(configs.DB_URL);
    let ad = await userModel.findOne({ email: configs.ADMIN.email });
    if (!ad) {
      await userModel.create(configs.ADMIN);
    }
    console.log("Kết nối db thành công");
  } catch (error) {
    console.log("error db: " + error.message);
  }
};

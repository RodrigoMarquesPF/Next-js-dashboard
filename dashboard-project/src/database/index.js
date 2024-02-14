import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    await mongoose.connect(
      ""
    );
    console.log("connected to mongoDB");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;

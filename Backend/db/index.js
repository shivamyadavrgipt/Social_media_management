import mongoose from "mongoose";

const connectionDB = async () => {
  try {
    const connectioninstance = await mongoose.connect(
      `${process.env.MONGODB_URI}}`
    );
    console.log(`\n Mongodb connected ${connectioninstance.connection.host}`);
  } catch (error) {
    console.log("MongoDB Connection Error", error);
    process.exit(1);
  }
};

export default connectionDB;
// priyachaurasiya730
// kqMCu6xmG4vy8aX9
// mongodb+srv://priyachaurasiya730:<db_password>@cluster0.a7tas.mongodb.net/

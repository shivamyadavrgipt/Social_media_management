<<<<<<< HEAD
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
=======
import mongoose from "mongoose"

const connectionDB=async()=>{
    try {
        const connectioninstance=await mongoose.connect(`${process.env.MONGODB_URI}/blog}`) 
        console.log(`\n Mongodb connected ${connectioninstance.connection.host}`)
     } catch (error) {
         console.log("MongoDB Connection Error",error)
         process.exit(1)
         
     }
}

export default connectionDB
>>>>>>> a7d26c9303f6cb6f2ed8837ea860add68c0b5e2b

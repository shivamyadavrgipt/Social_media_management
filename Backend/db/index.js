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
import mongoose from "mongoose";

const ConnectDb = (DATABASE_URL) => {

return mongoose.connect(DATABASE_URL)
        .then(() => {
            console.log("server is connected to mongodb successfully");
        })
        .catch((error) => {
            
            console.log("unable to connect with database", error)
        })};

export default ConnectDb;
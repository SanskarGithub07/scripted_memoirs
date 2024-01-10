import mongoose from "mongoose";

export default async function connectDB(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/authDB", {useNewUrlParser : true});
        console.log("Connected to DB");
    }
    catch(error){
        console.log("Error while connecting.", error);
    }
}
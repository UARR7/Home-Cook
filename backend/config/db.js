import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://capt4001:JFe7PUrjcs8qj4rR@cluster1.z8n49.mongodb.net/food-del?retryWrites=true&w=majority&appName=Cluster1')
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log(err));

   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.
import router from "./routes";
import { Request, Response } from "express";
import { sequelize } from "./config/postgres.service";
import umzug from "./migration";
import User, { initUserModel } from "./components/users/user.model";
const express = require("express");
const PORT = 4000;
const app = express();

async function config(){
    app.use("/", router);
    app.use((req:Request, res:Response)=>{
        res.status(404).send("Page not found");
    })
    try{
        await sequelize.authenticate();
        // // initUserModel(sequelize);
        await sequelize.sync();
        // await User.create({balance:10000})
        // await umzug.up();
        console.log("Connected to db");
    }catch(e){
        console.log("Db connection error", e)
    }
}

const initApp =async ()=>{
    await config();
    app.listen(PORT, ()=>{console.log(`Server ${PORT} tida yurgazildi!`)});
}

initApp();



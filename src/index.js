// require('dotenv').config({path: './env'}) //using the dotenv library to load environment variables from a file named env 
import connectDB from "./db/index.js";

import {app} from './app.js'
import dotenv from "dotenv"
dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    app.on("errror", (error) => {  //app object (an instance of an Express.js server) is listening for "error" events.
        console.log("ERRR: ", error);
        throw error
    })
    app.listen(process.env.PORT || 8000, () => { // listen to start server
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})

//While connecting to database always use async await and try catch
//2 imp points
//Database is always in another continent(fetching takes time-async await)
//Trying to connect to database can cause error(try catch)
// IIFE(iify)function->(()=>{})() , runs immediately(as soon as it is defined)
/*
import express from "express"
import mongoose from "mongoose"
import {DB_NAME} from "./constants"
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) // URL and database name
        app.on("errror", (error) => {  //app object (an instance of an Express.js server) is listening for "error" events.
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()
*/

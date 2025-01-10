// require("dotenv").config({path: "../.env"});

import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./db/index.js";

dotenv.config({
  path: ".env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log($`Server is running on port ${process.env.PORT}`)
    });
    app.on("error", (error) => {
        console.log("Error: ", error);
        throw new Error("Error connecting to database");
    });
  })
  .catch(error => {
    console.log("Error: ", error);
    throw new Error("Error connecting to database");
  })
  .catch(error => {
    console.log("Error: ", error);
    throw new Error("Error connecting to database");
  });

/*
import express from "express";

const app = express();

;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("Error: ", error);
            throw new Error("Error connecting to database");
        });

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.log("Error: ", error);
        throw new Error("Error connecting to database");
    }
})();
*/

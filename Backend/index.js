import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/bookRoute.js"
import cors from 'cors'

const app = express();

app.use(cors())
//For more Secure condition
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     method: ['GET', 'POST', 'Put', 'DELETE' ],
//     allowedHeaders: ['Content-Type']
//   })
// )

app.use(express.json());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to MERN STACK");
});

app.use('/books', booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`APP is running on port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

import express from "express";

const app = express();

app.use(express.json()); // this is necessary in order to be able to send data to the db

app.listen(8800, () => {
  console.log("Connected!");
});

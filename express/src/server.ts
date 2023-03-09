import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

const { Schema } = mongoose;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://root:example@localhost:27018/jokes?authSource=admin')
  .then(() => {
    console.log("connected");
  });
}


const JokesSchema = new Schema({
  joke: String,
}, { collection: "jokes" });


const Jokes = mongoose.model("jokes", JokesSchema)
module.exports = Jokes


const app = express();

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));


app.post("/", (req: Request, res: Response) => {

  Jokes.create({ joke: req.body.joke })
    .then((data) => res.send(data));
});

app.get("/", (req: Request, res: Response) => {
  Jokes.find()
    .then((data) => res.send(data));
});

app.delete("/:_id", (req: Request, res: Response) => {
  console.log(req.params._id)
  Jokes.findByIdAndDelete(req.params._id)
    .then((data) => res.send(data));
});


app.listen(3004, () => {
  console.log("Application started on port 3004!");
});

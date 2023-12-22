import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./db.js";
import form from "./routes/form/form.js";
import cors from "cors";

dotenv.config();
const port = process.env.PORT || 8000;

const app = express();

connectDb();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("frontend connected");
});

app.use("/api/form", form);

app.listen(port, () => {
  console.log("listening on port", port);
});

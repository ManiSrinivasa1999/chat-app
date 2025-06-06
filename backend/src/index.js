import express from "express";
import authRouter from "./routes/auth.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
app.use(express.json());

app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.info(`Server running on localhost Port: ${PORT}`);
  connectDB();
});

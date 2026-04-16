import express from "express";
const app = express();
import cors from "cors";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
import orderRoutes from "./routes/orderRoutes.js";
import db from "./config/db.js";

// connect to database
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/orders", orderRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";
import KPI from "./models/KPI.js";
import { kpis } from "./data/seed.js";

const app = express();

// Middleware
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(
  cors({
    // origin: "http://localhost:5174", 
    credentials: true,
  })
);

// Routes
app.use("/kpi", kpiRoutes);

// DB Connection
const PORT = process.env.PORT || 1337;

mongoose
  .connect(process.env.MONGO_URL)
  .then(async () => {
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

    // Uncomment to seed DB during dev

    //   await mongoose.connection.db.dropDatabase();
    //   await KPI.insertMany(kpis);
  })
  .catch((error) =>
    console.error("❌ MongoDB Connection Error:", error.message)
  );

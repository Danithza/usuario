import express from "express";
import "reflect-metadata";
import cors from "cors";
import { AppDataSource } from "./infrastructure/db/AppDataSource";
import userRoutes from "./routes";

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


app.use(
  cors({
    origin: "http://127.0.0.1:8080",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"], 
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


app.use("/api/users", userRoutes);


AppDataSource.initialize()
  .then(() => {
    console.log("✅ Database connected");
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    );
  })
  .catch((error) => console.error("❌ Database connection error:", error));

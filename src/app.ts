import express from "express";
import "reflect-metadata";
import { AppDataSource } from "./infrastructure/db/AppDataSource";
import userRoutes from "./routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// ✅ Asigna prefijo a todas las rutas de usuario
app.use("/api/users", userRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("✅ Database connected");
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  })
  .catch((error) => console.error("❌ Database connection error:", error));

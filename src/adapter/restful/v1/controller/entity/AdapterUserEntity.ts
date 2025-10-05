import "reflect-metadata";
import { DataSource } from "typeorm";
import { UserEntity } from "../../../../../infrastructure/entity/UserEntity";

export const AppDataSource = new DataSource({
  type: "sqlite", // puedes usar "mysql" o "postgres"
  database: "database.sqlite",
  synchronize: true, // crea tablas automáticamente (solo en desarrollo)
  logging: false,
  entities: [UserEntity],
});

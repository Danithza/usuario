import "reflect-metadata";
import { DataSource } from "typeorm";
import { UserEntity } from "../entity/UserEntity"; 

export const AppDataSource = new DataSource({
  type: "mysql", 
  host: "localhost", 
  port: 3306, 
  username: "root",
  password: "1234", 
  database: "usuarios_db", 
  synchronize: true, 
  logging: true,
  entities: [UserEntity],
});

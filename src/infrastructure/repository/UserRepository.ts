import { IUserRepository } from "./IUserRepository";
import { AppDataSource } from "../db/AppDataSource";
import { UserEntity } from "../entity/UserEntity";
import { DomainUserEntity } from "../../domain/entity/DomainUserEntity";
import { UserMapper } from "../mapper/UserMapper";

export class UserRepository implements IUserRepository {
  private repo = AppDataSource.getRepository(UserEntity);
  private mapper = new UserMapper();

  async add(user: DomainUserEntity): Promise<DomainUserEntity> {
    const entity = this.mapper.toEntity(user);
    const saved = await this.repo.save(entity);
    return this.mapper.toDomain(saved);
  }

  async update(userId: number, data: Partial<DomainUserEntity>): Promise<DomainUserEntity> {
    await this.repo.update(userId, data);
    const updated = await this.repo.findOneBy({ userId });
    return updated ? this.mapper.toDomain(updated) : Promise.reject("User not found");
  }

  async delete(userId: number): Promise<void> {
    await this.repo.delete(userId);
  }

  async findById(userId: number): Promise<DomainUserEntity | null> {
    const user = await this.repo.findOneBy({ userId });
    return user ? this.mapper.toDomain(user) : null;
  }

  async findByEmail(email: string): Promise<DomainUserEntity | null> {
    const user = await this.repo.findOneBy({ email });
    return user ? this.mapper.toDomain(user) : null;
  }

  async list(): Promise<DomainUserEntity[]> {
    const users = await this.repo.find();
    return users.map((u) => this.mapper.toDomain(u));
  }

  async deactivate(userId: number): Promise<DomainUserEntity> {
    await this.repo.update(userId, { active: false });
    const user = await this.repo.findOneBy({ userId });
    return this.mapper.toDomain(user!);
  }
}

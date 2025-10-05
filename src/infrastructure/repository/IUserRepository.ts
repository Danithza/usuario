import { DomainUserEntity } from "../../domain/entity/DomainUserEntity";

export interface IUserRepository {
  add(user: DomainUserEntity): Promise<DomainUserEntity>;
  update(userId: number, data: Partial<DomainUserEntity>): Promise<DomainUserEntity>;
  delete(userId: number): Promise<void>;
  findById(userId: number): Promise<DomainUserEntity | null>;
  findByEmail(email: string): Promise<DomainUserEntity | null>;
  list(): Promise<DomainUserEntity[]>;
  deactivate(userId: number): Promise<DomainUserEntity>;
}

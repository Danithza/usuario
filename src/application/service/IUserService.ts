import { DomainUserEntity } from "../../domain/entity/DomainUserEntity";

export interface IUserService {
  add(user: DomainUserEntity): Promise<DomainUserEntity>;
  update(userId: number, data: Partial<DomainUserEntity>): Promise<DomainUserEntity>;
  delete(userId: number): Promise<void>;
  changeRole(userId: number, role: string): Promise<DomainUserEntity>;
  findById(userId: number): Promise<DomainUserEntity | null>;
  findByEmail(email: string): Promise<DomainUserEntity | null>;
  list(): Promise<DomainUserEntity[]>;
  validateCredentials(email: string, password: string): Promise<DomainUserEntity | null>;
  deactivate(userId: number): Promise<DomainUserEntity>;
}

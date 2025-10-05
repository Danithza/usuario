import { IUserService } from "./IUserService";
import { DomainUserEntity } from "../../domain/entity/DomainUserEntity";
import { UserRepository } from "../../infrastructure/repository/UserRepository";

export class UserServiceImpl implements IUserService {
  private userRepository = new UserRepository();

  async add(data: any): Promise<DomainUserEntity> {
    this.validateRequiredFields(data);

    const user = new DomainUserEntity(
      0,
      data.firstName,
      data.lastName,
      data.email,
      data.password,
      data.phone,
      data.role,
      new Date(data.birthDate),
      data.address,
      true
    );

    return await this.userRepository.add(user);
  }

  async update(userId: number, data: Partial<DomainUserEntity>): Promise<DomainUserEntity> {
    const existingUser = await this.userRepository.findById(userId);
    if (!existingUser) throw new Error("User not found");

    const updatedUser = { ...existingUser, ...data };
    return await this.userRepository.update(userId, updatedUser);
  }

  async delete(userId: number): Promise<void> {
    const user = await this.userRepository.findById(userId);
    if (!user) throw new Error("User not found");

    await this.userRepository.delete(userId);
  }

  async deactivate(userId: number): Promise<DomainUserEntity> {
    const user = await this.userRepository.findById(userId);
    if (!user) throw new Error("User not found");

    user.active = false;
    return await this.userRepository.update(userId, user);
  }

  async changeRole(userId: number, role: string): Promise<DomainUserEntity> {
    const user = await this.userRepository.findById(userId);
    if (!user) throw new Error("User not found");

    user.role = role;
    return await this.userRepository.update(userId, user);
  }

  async findById(userId: number): Promise<DomainUserEntity | null> {
    const user = await this.userRepository.findById(userId);
    if (!user) throw new Error("User not found");
    return user;
  }

  async findByEmail(email: string): Promise<DomainUserEntity | null> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) throw new Error("User not found");
    return user;
  }

  async list(): Promise<DomainUserEntity[]> {
    return await this.userRepository.list();
  }

  async validateCredentials(email: string, password: string): Promise<DomainUserEntity | null> {
    // Solo a modo de ejemplo (no maneja autenticación aquí)
    const user = await this.userRepository.findByEmail(email);
    if (!user || user.password !== password) {
      throw new Error("Invalid credentials");
    }
    return user;
  }

  // 🔹 Validaciones de negocio
  private validateRequiredFields(data: any): void {
    if (!data.firstName || !data.lastName || !data.email || !data.password) {
      throw new Error("Missing required user fields");
    }
  }
}

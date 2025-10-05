import { IUserMapper } from "./IUserMapper";
import { DomainUserEntity } from "../../domain/entity/DomainUserEntity";
import { UserEntity } from "../entity/UserEntity";

export class UserMapper implements IUserMapper {
  toDomain(userEntity: UserEntity): DomainUserEntity {
    return new DomainUserEntity(
      userEntity.userId,
      userEntity.firstName,
      userEntity.lastName,
      userEntity.email,
      userEntity.password,
      userEntity.phone,
      userEntity.role,
      userEntity.birthDate,
      userEntity.address,
      userEntity.active
    );
  }

  toEntity(user: DomainUserEntity): UserEntity {
    const entity = new UserEntity();
    entity.userId = user.userId;
    entity.firstName = user.firstName;
    entity.lastName = user.lastName;
    entity.email = user.email;
    entity.password = user.password;
    entity.phone = user.phone;
    entity.role = user.role;
    entity.birthDate = user.birthDate;
    entity.address = user.address;
    entity.active = user.active;
    return entity;
  }
}

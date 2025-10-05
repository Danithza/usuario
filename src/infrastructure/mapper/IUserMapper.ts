import { DomainUserEntity } from "../../domain/entity/DomainUserEntity";
import { UserEntity } from "../entity/UserEntity";

export interface IUserMapper {
  toDomain(userEntity: UserEntity): DomainUserEntity;
  toEntity(user: DomainUserEntity): UserEntity;
}

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users")
export class UserEntity {
  @PrimaryGeneratedColumn()
  userId!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column({ unique: true, length: 100 })
  email!: string;

  @Column()
  password!: string;

  @Column({ length: 15 })
  phone!: string;

  @Column()
  role!: string;

  @Column()
  birthDate!: Date;

  @Column({ length: 100 })
  address!: string;

  @Column({ default: true })
  active!: boolean;
}

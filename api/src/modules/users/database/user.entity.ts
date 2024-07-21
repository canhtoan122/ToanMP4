import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  UserID: number;

  @Column()
  Email: string;

  @Column()
  Password: string;

  @Column()
  UserRole: string;

  @Column({ default: false })
  isPremeum: boolean;

  @Column()
  PaymentCard: string;

}
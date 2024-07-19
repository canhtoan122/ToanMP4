import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  PaymentID: number;

  @Column()
  Code: string;

  @Column()
  Account: string;

  @Column()
  Password: string;

  @Column({ default: false })
  Status: boolean;

  @Column()
  PaymentMethodID: number;

}
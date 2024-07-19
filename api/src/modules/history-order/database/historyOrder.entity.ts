import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class HistoryOrder {
  @PrimaryGeneratedColumn()
  HistoryOrderID: number;

  @Column()
  DateTime: number;

  @Column()
  AmountMoney: number;

  @Column()
  PaymentID: number;

}
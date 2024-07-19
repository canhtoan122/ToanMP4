import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class FavoriteSong {
  @PrimaryColumn()
  UserID: number;

  @Column()
  SongID: number;

}
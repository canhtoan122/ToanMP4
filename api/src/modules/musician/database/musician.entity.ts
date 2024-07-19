import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Musician {
  @PrimaryGeneratedColumn()
  MusicianID: number;

  @Column()
  MusicianName: string;

  @Column()
  MusicianDescription: string;

  @Column({ default: false })
  MusicianTrending: boolean;

  @Column()
  FavoriteMusician: string;
}
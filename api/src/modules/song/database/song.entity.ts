import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Song {
  @PrimaryGeneratedColumn()
  SongID: number;

  @Column()
  SongName: string;

  @Column()
  SongVideo: string;

  @Column()
  SongDescription: string;

  @Column({ default: false })
  SongTrending: boolean;

  @Column()
  MusicianID: number; 
}
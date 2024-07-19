import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Playlist {
  @PrimaryGeneratedColumn()
  PlaylistID: number;

  @Column({ default: false })
  isPublic: boolean;

  @Column()
  UserID: number;

  @Column()
  SongID: number;
}
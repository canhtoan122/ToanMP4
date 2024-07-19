import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Album {
  @PrimaryGeneratedColumn()
  AlbumID: number;

  @Column()
  AlbumName: string;

  @Column()
  AlbumDescription: string;

  @Column({ default: false })
  AlbumTrending: boolean;
}
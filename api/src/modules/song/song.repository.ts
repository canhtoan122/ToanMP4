import { Controller } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Song } from './database/song.entity';

@Controller('song')
export class SongRepository {
    constructor(
        @InjectRepository(Song)
        private songRepository: Repository<Song>
    ){}
    getSong(){
        return this.songRepository.find();
    }
    async create(song:Song){
        const songs = await this.songRepository.save(song);
        return songs;
      }
}

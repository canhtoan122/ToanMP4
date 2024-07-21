import { Injectable } from '@nestjs/common';
import { SongRepository } from './song.repository';
import { Song } from './database/song.entity';

@Injectable()
export class SongService {
    constructor(
        private songRepository : SongRepository
    ){
        
    }
    getSong(){
        const songs = this.songRepository.getSong();
        return songs;
    }
    async getSongTrending(){
        const songs = await this.songRepository.getSong();
        const trendingSongs = songs.filter(song => song.SongTrending); 
        return trendingSongs;
    }
    create(song:Song){
        const songs = this.songRepository.create(song);
        return songs;
    }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { SongService } from './song.service';
import { Song } from './database/song.entity';

@Controller('song')
export class SongController {
    constructor(private readonly songService : SongService){}
    @Get()
    getSong(){
        return this.songService.getSong();
    }
    @Get('trending')
    getSongTrending(){
        return this.songService.getSongTrending();
    }
    @Post()
    create(@Body() song:Song){
        return this.songService.create(song);
    }
}

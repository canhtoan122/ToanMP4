import { Body, Controller, Get, Post } from '@nestjs/common';
import { MusicianService } from './musician.service';
import { Musician } from './database/musician.entity';

@Controller('musician')
export class MusicianController {
    constructor(private readonly musicianService : MusicianService){}
    @Get()
    getMusician(){
        return this.musicianService.getMusician();
    }
    @Get('trending')
    getMusicianTrending(){
        return this.musicianService.getMusicianTrending();
    }
    @Post()
    create(@Body() musician:Musician){
        return this.musicianService.create(musician);
    }
}

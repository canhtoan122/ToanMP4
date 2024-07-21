import { Body, Controller, Get, Post } from '@nestjs/common';
import { AlbumService } from './album.service';
import { Album } from './database/album.entity';

@Controller('album')
export class AlbumController {
    constructor(private readonly albumService : AlbumService){}
    @Get()
    getAlbum(){
        return this.albumService.getAlbum();
    }
    @Get('trending')
    getAlbumTrending(){
        return this.albumService.getAlbumTrending();
    }
    @Post()
    create(@Body() album:Album){
        return this.albumService.create(album);
    }
}

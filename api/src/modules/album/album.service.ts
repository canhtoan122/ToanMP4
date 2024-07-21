import { Injectable } from '@nestjs/common';
import { AlbumRepository } from './album.repository';
import { Album } from './database/album.entity';

@Injectable()
export class AlbumService {
    constructor(
        private albumRepository : AlbumRepository
    ){
        
    }
    getAlbum(){
        const albums = this.albumRepository.getAlbum();
        return albums;
    }
    async getAlbumTrending(){
        const albums = await this.albumRepository.getAlbum();
        const trendingAlbums = albums.filter(album => album.AlbumTrending); 
        return trendingAlbums;
    }
    create(album:Album){
        const albums = this.albumRepository.create(album);
        return albums;
    }
}

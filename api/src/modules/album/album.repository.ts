import { Controller } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Album } from './database/album.entity';

@Controller('album')
export class AlbumRepository {
    constructor(
        @InjectRepository(Album)
        private albumRepository: Repository<Album>
    ){}
    getAlbum(){
        return this.albumRepository.find();
    }
    async create(album:Album){
        const albums = await this.albumRepository.save(album);
        return albums;
      }
}

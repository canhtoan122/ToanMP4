import { Controller } from '@nestjs/common';
import { Musician } from './database/musician.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Controller('musician')
export class MusicianRepository {
    constructor(
        @InjectRepository(Musician)
        private musicianRepository: Repository<Musician>
    ){}
    getMusician(){
        return this.musicianRepository.find();
    }
    async create(musician:Musician){
        const musicians = await this.musicianRepository.save(musician);
        return musicians;
      }
}

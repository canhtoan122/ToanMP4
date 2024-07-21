import { Injectable } from '@nestjs/common';
import { MusicianRepository } from './musician.repository';
import { Musician } from './database/musician.entity';

@Injectable()
export class MusicianService {
    constructor(
        private musicianRepository : MusicianRepository
    ){
        
    }
    getMusician(){
        const musicians = this.musicianRepository.getMusician();
        return musicians;
    }
    async getMusicianTrending(){
        const musicians = await this.musicianRepository.getMusician();
        const trendingMusicians = musicians.filter(musician => musician.MusicianTrending); 
        return trendingMusicians;
    }
    create(musician:Musician){
        const musicians = this.musicianRepository.create(musician);
        return musicians;
    }
}

import { Module } from '@nestjs/common';
import { MusicianController } from './musician.controller';
import { MusicianService } from './musician.service';
import { MusicianRepository } from './musician.repository';
import { Musician } from './database/musician.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Musician])],
  controllers: [MusicianController],
  providers: [MusicianService, MusicianRepository]
})
export class MusicianModule {}

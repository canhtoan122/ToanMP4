import { Module } from '@nestjs/common';
import { SongController } from './song.controller';
import { SongService } from './song.service';
import { SongRepository } from './song.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from './database/song.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Song])],
  controllers: [SongController],
  providers: [SongService, SongRepository]
})
export class SongModule {}

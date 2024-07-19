import { Module } from '@nestjs/common';
import { FavoriteSongController } from './favorite-song.controller';
import { FavoriteSongService } from './favorite-song.service';

@Module({
  controllers: [FavoriteSongController],
  providers: [FavoriteSongService]
})
export class FavoriteSongModule {}

import { Module } from '@nestjs/common';
import { MusicianController } from './musician.controller';
import { MusicianService } from './musician.service';

@Module({
  controllers: [MusicianController],
  providers: [MusicianService]
})
export class MusicianModule {}

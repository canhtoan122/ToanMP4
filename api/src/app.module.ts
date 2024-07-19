import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';
import { MulterModule } from '@nestjs/platform-express';
import { PaymentModule } from './modules/payment/payment.module';
import { HistoryOrderModule } from './modules/history-order/history-order.module';
import { PaymentMethodModule } from './modules/payment-method/payment-method.module';
import { FavoriteSongModule } from './modules/favorite-song/favorite-song.module';
import { SongModule } from './modules/song/song.module';
import { PlayListModule } from './modules/play-list/play-list.module';
import { MusicianModule } from './modules/musician/musician.module';
import { AlbumModule } from './modules/album/album.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    MulterModule.register({
      dest: './uploads', // Đường dẫn tới thư mục lưu trữ file tải lên
    }),
    UsersModule,
    PaymentModule,
    HistoryOrderModule,
    PaymentMethodModule,
    FavoriteSongModule,
    SongModule,
    PlayListModule,
    MusicianModule,
    AlbumModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { HistoryOrderController } from './history-order.controller';
import { HistoryOrderService } from './history-order.service';
import { HistoryOrder } from './database/historyOrder.entity';
import { HistoryOrderRepository } from './history-order.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([HistoryOrder])],
  controllers: [HistoryOrderController],
  providers: [HistoryOrderService, HistoryOrderRepository]
})
export class HistoryOrderModule {}

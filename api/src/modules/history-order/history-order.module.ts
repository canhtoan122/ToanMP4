import { Module } from '@nestjs/common';
import { HistoryOrderController } from './history-order.controller';
import { HistoryOrderService } from './history-order.service';

@Module({
  controllers: [HistoryOrderController],
  providers: [HistoryOrderService]
})
export class HistoryOrderModule {}

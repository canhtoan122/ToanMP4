import { Body, Controller, Get, Post } from '@nestjs/common';
import { HistoryOrderService } from './history-order.service';
import { HistoryOrder } from './database/historyOrder.entity';

@Controller('history-order')
export class HistoryOrderController {
    constructor(private readonly historyOrderService : HistoryOrderService){}
    @Get()
    getHistoryOrder(){
        return this.historyOrderService.getHistoryOrder();
    }
    @Post()
    create(@Body() historyOrder:HistoryOrder){
        return this.historyOrderService.create(historyOrder);
    }
}

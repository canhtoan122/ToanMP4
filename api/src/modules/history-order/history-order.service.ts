import { Injectable } from '@nestjs/common';
import { HistoryOrderRepository } from './history-order.repository';
import { HistoryOrder } from './database/historyOrder.entity';

@Injectable()
export class HistoryOrderService {
    constructor(
        private historyOrderRepository : HistoryOrderRepository
    ){
        
    }
    getHistoryOrder(){
        const historyOrders = this.historyOrderRepository.getHistoryOrder();
        return historyOrders;
    }
    create(historyOrder:HistoryOrder){
        const historyOrders = this.historyOrderRepository.create(historyOrder);
        return historyOrders;
    }
}

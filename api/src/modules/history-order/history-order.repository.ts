import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HistoryOrder } from './database/historyOrder.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HistoryOrderRepository {
    constructor(
        @InjectRepository(HistoryOrder)
        private historyOrderRepository: Repository<HistoryOrder>
    ){}
    getHistoryOrder(){
        return this.historyOrderRepository.find();
    }
    async create(historyOrder:HistoryOrder){
        const historyOrders = await this.historyOrderRepository.save(historyOrder);
        return historyOrders;
    }
}

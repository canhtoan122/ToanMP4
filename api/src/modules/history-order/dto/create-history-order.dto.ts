import { IsNotEmpty, IsNumber} from "class-validator";

export class CreateHistoryOrderDTO{
    @IsNumber()
    @IsNotEmpty()
    DateTime: number;

    @IsNumber()
    @IsNotEmpty()
    AmountMoney: number;

    @IsNumber()
    @IsNotEmpty()
    PaymentID: number;
}
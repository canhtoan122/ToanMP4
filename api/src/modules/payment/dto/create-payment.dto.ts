import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePaymentDTO{
    @IsString()
    @IsNotEmpty()
    Code: string;

    @IsString()
    @IsNotEmpty()
    Account: string;

    @IsString()
    @IsNotEmpty()
    Password: string;

    @IsBoolean()
    @IsNotEmpty()
    Status: boolean;

    @IsNumber()
    @IsNotEmpty()
    PaymentMethodID: number;
}
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreatePaymentDTO{
    @IsString()
    @IsNotEmpty()
    Code: string;

    @IsString()
    @IsNotEmpty()
    Password: string;

    @IsString()
    @IsNotEmpty()
    UserRole: string;

    @IsBoolean()
    @IsNotEmpty()
    isPremeum: boolean;

    @IsString()
    @IsNotEmpty()
    PaymentCard: string;

    @IsString()
    @IsNotEmpty()
    UserSettingID: string;
}
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDTO{
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    Email: string;

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
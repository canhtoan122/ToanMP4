import { IsNotEmpty, IsString} from "class-validator";

export class CreatePaymentMethodDTO{
    @IsString()
    @IsNotEmpty()
    Name: string;
}
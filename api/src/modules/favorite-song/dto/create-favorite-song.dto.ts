import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateFavoriteSongDTO{
    @IsNumber()
    @IsNotEmpty()
    UserID: number;

    @IsNumber()
    @IsNotEmpty()
    SongID: number;
}
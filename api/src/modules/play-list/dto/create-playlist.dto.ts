import { IsBoolean, IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CreatePlaylistDTO{
    @IsBoolean()
    @IsNotEmpty()
    isPublic: boolean;

    @IsNumber()
    @IsNotEmpty()
    UserID: number;

    @IsNumber()
    @IsNotEmpty()
    SongID: number;
}
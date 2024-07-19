import { IsBoolean, IsNotEmpty, IsString} from "class-validator";

export class CreateMusicianDTO{
    @IsString()
    @IsNotEmpty()
    MusicianName: string;

    @IsString()
    @IsNotEmpty()
    MusicianDescription: string;

    @IsBoolean()
    @IsNotEmpty()
    MusicianTrending: boolean;

    @IsString()
    @IsNotEmpty()
    FavoriteMusician: string;
}
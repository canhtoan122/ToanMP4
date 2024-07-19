import { IsBoolean, IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CreateSongDTO{
    @IsString()
    @IsNotEmpty()
    SongName: string;

    @IsString()
    @IsNotEmpty()
    SongVideo: string;

    @IsString()
    @IsNotEmpty()
    SongDescription: string;

    @IsBoolean()
    @IsNotEmpty()
    SongTrending: boolean;

    @IsNumber()
    @IsNotEmpty()
    MusicianID: number;
}
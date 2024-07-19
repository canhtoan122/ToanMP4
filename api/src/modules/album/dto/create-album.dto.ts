import { IsBoolean, IsNotEmpty, IsString} from "class-validator";

export class CreateAlbumDTO{
    @IsString()
    @IsNotEmpty()
    AlbumName: string;

    @IsString()
    @IsNotEmpty()
    AlbumDescription: string;

    @IsBoolean()
    @IsNotEmpty()
    AlbumTrending: boolean;
}
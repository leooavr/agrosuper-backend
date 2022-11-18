import { IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateProvincesDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly idRegion: number;
}

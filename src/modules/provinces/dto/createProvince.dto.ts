import { IsNumber, IsString } from 'class-validator';

export class CreateProvincesDto {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly name: string;

  @IsNumber()
  readonly idRegion: number;
}

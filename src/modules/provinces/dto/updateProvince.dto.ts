import { IsNumber, IsString } from 'class-validator';

export class UpdateProvincesDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly idRegion: number;
}

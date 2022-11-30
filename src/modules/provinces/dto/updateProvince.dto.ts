import { IsNumber, IsString } from 'class-validator';

export class UpdateProvincesDto {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly name: string;

  @IsNumber()
  readonly idRegion: number;
}

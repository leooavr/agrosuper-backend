import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateRealConsumptionsDto {
  @IsNumber()
  readonly year: number;

  @IsString()
  readonly month: string;

  @IsNumber()
  readonly consumption: number;

  @IsOptional()
  readonly idProteinSector: string;
}

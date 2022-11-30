import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateRealConsumptionsDto {
  @IsNumber()
  readonly year: number;

  @IsString()
  readonly month: string;

  @IsNumber()
  readonly consumption: number;

  @IsOptional()
  readonly idProteinSector: string;
}

import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateProjectedConsumptionsDto {
  @IsNumber()
  readonly year: number;

  @IsString()
  readonly month: string;

  @IsNumber()
  readonly consumption: number;

  @IsOptional()
  readonly idProteinSector: string;
}

import { IsOptional, IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateMonthlyCommunalPopulationProjectionsDto {
  @IsNumber()
  readonly year: number;

  @IsString()
  readonly month: string;

  @IsNumber()
  readonly projection: number;

  @IsBoolean()
  readonly isReal: boolean;

  @IsOptional()
  readonly idCommune: number;
}

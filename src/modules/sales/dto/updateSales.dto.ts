import { IsOptional, IsString, IsUUID, IsNumber } from 'class-validator';

export class UpdateSalesDto {
  @IsNumber()
  readonly year: number;

  @IsString()
  readonly month: string;

  @IsNumber()
  readonly salesKg: number;

  @IsNumber()
  readonly salesNeta: number;

  @IsOptional()
  readonly idProteinSector: string;

  @IsOptional()
  readonly idClient: string;
}

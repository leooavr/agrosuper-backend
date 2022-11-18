import { IsOptional, IsString, IsUUID } from 'class-validator';

import { SalesDto } from '../../sales/dto/sales.dto';
import { ProjectedConsumptionsDto } from '../../projectedConsumptions/dto/projectedConsumptions.dto';
import { RealConsumptionsDto } from '../../realConsumptions/dto/realConsumptions.dto';

export class ProteinSectorsDto {
  @IsUUID()
  readonly id: string;

  @IsString()
  readonly name: string;

  @IsOptional()
  readonly sales: SalesDto[];

  @IsOptional()
  readonly projectedConsumption: ProjectedConsumptionsDto;

  @IsOptional()
  readonly realConsumption: RealConsumptionsDto;
}

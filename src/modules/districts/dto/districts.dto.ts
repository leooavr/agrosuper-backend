import { IsOptional, IsString, IsUUID } from 'class-validator';

import { CommunesDto } from '../../communes/dto/communes.dto';
import { AreasDto } from '../../areas/dto/areas.dto';
import { MonthlyAreaPopulationProjectionsDto } from '../../monthlyAreaPopulationProjections/dto/monthlyAreaPopulationProjections.dto';

export class DistrictsDto {
  @IsUUID()
  readonly id: string;

  @IsString()
  readonly name: string;

  @IsOptional()
  readonly commune: CommunesDto;

  @IsOptional()
  readonly area: AreasDto[];

  @IsOptional()
  readonly monthlyAreaPopulationProjections: MonthlyAreaPopulationProjectionsDto[];
}

import { IsOptional, IsString, IsUUID } from 'class-validator';

import { RegionsDto } from '../../regions/dto/regions.dto';
import { CommunesDto } from '../../communes/dto/communes.dto';

export class ProvincesDto {
  @IsUUID()
  readonly id: string;

  @IsString()
  readonly name: string;

  @IsOptional()
  readonly region: RegionsDto;

  @IsOptional()
  readonly communes: CommunesDto[];
}

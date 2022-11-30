import { IsOptional, IsString, IsUUID, IsBoolean } from 'class-validator';

import { DistrictsDto } from 'src/modules/districts/dto/districts.dto';
import { AreasCategoryDto } from '../../areasCategory/dto/areasCategory.dto';

export class CreateAreasDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly surface: string;

  @IsBoolean()
  readonly isUrban: boolean;

  @IsString()
  readonly participation: string;

  @IsOptional()
  readonly idAreaCategory: string;

  @IsOptional()
  readonly idDistrict: string;
}
